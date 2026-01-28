import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {Object} ReactComponentTemplateProps
 * @property {string} title - The title to display
 * @property {string} [subtitle] - Optional subtitle
 * @property {boolean} [isActive=false] - Active state flag
 * @property {Function} [onAction] - Callback function for actions
 * @property {React.ReactNode} [children] - Child elements
 */

/**
 * ReactComponentTemplate
 * 
 * A production-ready functional component template.
 * Features:
 * - Prop validation with PropTypes
 * - JSDoc type hints
 * - State management (useState)
 * - Side effects (useEffect)
 * - Memoized callbacks (useCallback)
 * - Conditional rendering
 * - Accessibility attributes (ARIA)
 * 
 * @param {ReactComponentTemplateProps} props
 */
const ReactComponentTemplate = ({
    title,
    subtitle,
    isActive = false,
    onAction,
    children
}) => {
    // Local state for internal component logic
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Handle primary action click.
     * Uses useCallback to prevent unnecessary re-renders in child components.
     */
    const handleAction = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            // Simulate async operation
            await new Promise(resolve => setTimeout(resolve, 1000));

            setCount(prev => prev + 1);

            // Call parent handler if provided
            if (onAction) {
                onAction(count + 1);
            }
        } catch (err) {
            setError(err.message || 'An unexpected error occurred');
            console.error('Action failed:', err);
        } finally {
            setIsLoading(false);
        }
    }, [count, onAction]);

    // Effect to log mount/unmount or handle subscriptions
    useEffect(() => {
        console.log(`Component mounted: ${title}`);

        return () => {
            console.log(`Component unmounted: ${title}`);
        };
    }, [title]);

    // Error state UI
    if (error) {
        return (
            <div className="p-4 bg-red-50 text-red-700 rounded-md" role="alert">
                <p className="font-bold">Error</p>
                <p>{error}</p>
                <button
                    onClick={() => setError(null)}
                    className="mt-2 text-sm underline hover:text-red-800"
                >
                    Dismiss
                </button>
            </div>
        );
    }

    return (
        <div
            className={`react-component p-6 rounded-lg shadow-sm border transition-colors ${isActive ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
                }`}
            role="region"
            aria-labelledby="component-title"
        >
            <header className="mb-4">
                <h2
                    id="component-title"
                    className="text-2xl font-bold text-gray-900"
                >
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-gray-500 mt-1">{subtitle}</p>
                )}
            </header>

            <div className="content mb-6">
                {children}
            </div>

            <footer className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-600">
                    Interaction Count: <span className="font-mono font-bold">{count}</span>
                </div>

                <button
                    onClick={handleAction}
                    disabled={isLoading}
                    className={`px-4 py-2 rounded-md font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${isLoading
                            ? 'bg-blue-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                        }`}
                    aria-busy={isLoading}
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        'Trigger Action'
                    )}
                </button>
            </footer>
        </div>
    );
};

ReactComponentTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    isActive: PropTypes.bool,
    onAction: PropTypes.func,
    children: PropTypes.node
};

ReactComponentTemplate.defaultProps = {
    subtitle: '',
    isActive: false,
    onAction: null,
    children: null
};

export default ReactComponentTemplate;
