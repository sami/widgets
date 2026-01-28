import axios, {
    AxiosInstance,
    AxiosError,
    InternalAxiosRequestConfig,
    AxiosResponse
} from 'axios';

// ----------------------------------------------------------------------
// Configuration
// ----------------------------------------------------------------------

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com/v1';
const REQUEST_TIMEOUT = 10000; // 10 seconds

// ----------------------------------------------------------------------
// Types
// ----------------------------------------------------------------------

export interface ApiResponse<T = any> {
    data: T;
    message?: string;
    status: number;
}

export interface ApiError {
    message: string;
    code?: string;
    details?: any;
}

// ----------------------------------------------------------------------
// API Client Class
// ----------------------------------------------------------------------

class ApiClient {
    private static instance: ApiClient;
    private axiosInstance: AxiosInstance;

    private constructor() {
        this.axiosInstance = axios.create({
            baseURL: API_BASE_URL,
            timeout: REQUEST_TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    public static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    private setupInterceptors(): void {
        // Request Interceptor
        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // Get token from storage (example: localStorage, cookie, or store)
                const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

                if (token && config.headers) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                // Log request in dev
                if (process.env.NODE_ENV === 'development') {
                    console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
                }

                return config;
            },
            (error: AxiosError) => {
                return Promise.reject(error);
            }
        );

        // Response Interceptor
        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            async (error: AxiosError) => {
                const originalRequest = error.config;

                // Handle 401 Unauthorized (Token refresh logic could go here)
                if (error.response?.status === 401) {
                    console.warn('[API] Unauthorized access - redirecting to login');
                    // window.location.href = '/login'; // Example redirect
                }

                // Handle 403 Forbidden
                if (error.response?.status === 403) {
                    console.error('[API] Access forbidden');
                }

                // Standardize error format
                const customError: ApiError = {
                    message: (error.response?.data as any)?.message || error.message || 'Unknown error',
                    code: (error.response?.data as any)?.code,
                    details: (error.response?.data as any)?.details
                };

                return Promise.reject(customError);
            }
        );
    }

    // ----------------------------------------------------------------------
    // Public Methods
    // ----------------------------------------------------------------------

    public getAxiosInstance(): AxiosInstance {
        return this.axiosInstance;
    }

    public async get<T>(url: string, params?: any): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, { params });
        return response.data;
    }

    public async post<T>(url: string, data?: any): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data);
        return response.data;
    }

    public async put<T>(url: string, data?: any): Promise<T> {
        const response = await this.axiosInstance.put<T>(url, data);
        return response.data;
    }

    public async patch<T>(url: string, data?: any): Promise<T> {
        const response = await this.axiosInstance.patch<T>(url, data);
        return response.data;
    }

    public async delete<T>(url: string): Promise<T> {
        const response = await this.axiosInstance.delete<T>(url);
        return response.data;
    }
}

// Export singleton instance
export const api = ApiClient.getInstance();

// Export class for testing or multiple instances
export default ApiClient;
