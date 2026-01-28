import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * @typedef {Object} UseFetchOptions
 * @property {boolean} [immediate=true] - Whether to execute the fetch immediately on mount
 * @property {any} [initialData=null] - Initial data to return before fetch completes
 * @property {Object} [headers] - Custom headers for the request
 */

/**
 * @typedef {Object} UseFetchResult
 * @property {any} data - The response data
 * @property {Error|null} error - The error object if request failed
 * @property {boolean} isLoading - Loading state flag
 * @property {Function} execute - Manual trigger function
 * @property {Function} abort - Function to cancel the current request
 */

/**
 * useFetch - A robust custom hook for data fetching
 * 
 * Features:
 * - TypeScript support via JSDoc
 * - Loading and Error states
 * - AbortController support for cleanup
 * - Immediate or deferred execution
 * - Race condition handling
 * 
 * @param {string} url - The URL to fetch
 * @param {UseFetchOptions} options - Configuration options
 * @returns {UseFetchResult}
 */
const useFetch = (url, options = {}) => {
    const {
        immediate = true,
        initialData = null,
        headers = {}
    } = options;

    // State
    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(immediate);

    // Refs to handle cleanup and race conditions
    const abortControllerRef = useRef(null);
    const isMountedRef = useRef(true);

    // Track if component is mounted to prevent state updates on unmounted component
    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    /**
     * Abort the current request if it exists
     */
    const abort = useCallback(() => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
    }, []);

    /**
     * Execute the fetch request
     */
    const execute = useCallback(async (overrideOptions = {}) => {
        // Cancel any pending request
        abort();

        // Create new abort controller
        const abortController = new AbortController();
        abortControllerRef.current = abortController;

        setIsLoading(true);
        setError(null);

        try {
            const fetchOptions = {
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                    ...overrideOptions.headers
                },
                signal: abortController.signal,
                ...overrideOptions
            };

            const response = await fetch(url, fetchOptions);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (isMountedRef.current) {
                setData(json);
            }
        } catch (err) {
            // Ignore abort errors
            if (err.name === 'AbortError') {
                console.log('Fetch aborted');
                return;
            }

            if (isMountedRef.current) {
                setError(err);
                console.error('Fetch error:', err);
            }
        } finally {
            if (isMountedRef.current) {
                setIsLoading(false);
            }
        }
    }, [url, headers, abort]);

    // Trigger effect if immediate is true
    useEffect(() => {
        if (immediate) {
            execute();
        }

        // Cleanup function
        return () => {
            abort();
        };
    }, [execute, immediate, abort]);

    return { data, error, isLoading, execute, abort };
};

export default useFetch;
