import React, { useEffect } from 'react';
import {
    useParams,
    useNavigate,
    useLocation,
    Link,
    Outlet
} from 'react-router-dom';

// ----------------------------------------------------------------------
// Types & Interfaces
// ----------------------------------------------------------------------

interface PageComponentProps {
    /** Page title for the document head */
    title?: string;
    /** Whether to show the sidebar navigation */
    showSidebar?: boolean;
    /** Optional analytics tracking ID for this specific page */
    trackingId?: string;
}

interface UserProfile {
    id: string;
    username: string;
    items: string[];
}

// ----------------------------------------------------------------------
// Component Implementation
// ----------------------------------------------------------------------

/**
 * PageComponentTemplate
 * 
 * A comprehensive example of a full page component.
 * 
 * Key Features:
 * - TypeScript strict typing
 * - React Router integration (Hooks: useParams, useNavigate, useLocation)
 * - Dynamic document title management
 * - Responsive layout structure with conditional Sidebar
 * - Error Boundary simulated capability
 * - Loading states
 */
const PageComponentTemplate: React.FC<PageComponentProps> = ({
    title = 'Default Page Title',
    showSidebar = true,
    trackingId
}) => {
    // Router Hooks
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const location = useLocation();

    // Local State
    const [user, setUser] = React.useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);

    // 1. Side Effect: Update Document Title
    useEffect(() => {
        document.title = `${title} | My App`;
    }, [title]);

    // 2. Side Effect: Simulate Data Fetching or Analytics
    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            try {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 800));

                // Mock data
                setUser({
                    id: id || 'guest',
                    username: id ? `User_${id}` : 'GuestUser',
                    items: ['Dashboard', 'Settings', 'Profile']
                });

                if (trackingId) {
                    console.log(`[Analytics] Tracking page view: ${trackingId}`);
                }
            } catch (error) {
                console.error('Failed to load page data', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, [id, trackingId]);

    // Event Handlers
    const handleGoBack = () => {
        if (location.key !== 'default') {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    // Render Helpers
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading resources...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col md:flex-row">
            {/* 
        ----------------------
        Sidebar Area 
        ----------------------
      */}
            {showSidebar && (
                <aside className="w-full md:w-64 bg-slate-900 text-white p-6 flex-shrink-0">
                    <nav className="space-y-4">
                        <h3 className="text-xl font-bold border-b border-slate-700 pb-2">Menu</h3>
                        <ul className="space-y-2">
                            <li><Link to="/dashboard" className="hover:text-blue-300 transition block py-1">Dashboard</Link></li>
                            <li><Link to="/settings" className="hover:text-blue-300 transition block py-1">Settings</Link></li>
                            <li>
                                <button
                                    onClick={() => navigate('/logout')}
                                    className="text-red-400 hover:text-red-300 w-full text-left py-1"
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>
            )}

            {/* 
        ----------------------
        Main Content Area 
        ----------------------
      */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                    <div>
                        <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb">
                            <span className="cursor-pointer hover:underline" onClick={() => navigate('/')}>Home</span>
                            <span className="mx-2">/</span>
                            <span className="text-gray-900 font-medium">{title}</span>
                        </nav>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{title}</h1>
                    </div>

                    <button
                        onClick={handleGoBack}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                    >
                        ← Back
                    </button>
                </header>

                <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
                    <h2 className="text-lg font-semibold mb-4">Content Area</h2>
                    <p className="text-gray-600 mb-6">
                        Welcome back, <strong>{user?.username}</strong>. You are currently viewing ID: {id || 'N/A'}.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                            <h3 className="font-bold text-blue-900 mb-2">Metric A</h3>
                            <p className="text-3xl font-mono text-blue-600">2,450</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                            <h3 className="font-bold text-green-900 mb-2">Metric B</h3>
                            <p className="text-3xl font-mono text-green-600">98.5%</p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                            <h3 className="font-bold text-purple-900 mb-2">Metric C</h3>
                            <p className="text-3xl font-mono text-purple-600">12m</p>
                        </div>
                    </div>
                </section>

                {/* Nested Routes if any */}
                <section>
                    <Outlet />
                </section>

            </main>
        </div>
    );
};

export default PageComponentTemplate;
