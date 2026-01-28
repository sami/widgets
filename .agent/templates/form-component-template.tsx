import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// ----------------------------------------------------------------------
// Schema Definition
// ----------------------------------------------------------------------

// Using Zod for robust runtime validation
const formSchema = z.object({
    username: z
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be less than 20 characters'),
    email: z
        .string()
        .email('Please enter a valid email address'),
    role: z.enum(['admin', 'user', 'editor'], {
        errorMap: () => ({ message: 'Please select a valid role' })
    }),
    notifications: z.boolean().default(false),
    bio: z.string().max(160, 'Bio too long (max 160 chars)').optional(),
});

// Infer strict TypeScript type from the schema
type FormValues = z.infer<typeof formSchema>;

// ----------------------------------------------------------------------
// Component Props
// ----------------------------------------------------------------------

interface FormComponentProps {
    onSubmitSuccess?: (data: FormValues) => void;
    initialValues?: Partial<FormValues>;
}

// ----------------------------------------------------------------------
// Component Implementation
// ----------------------------------------------------------------------

/**
 * FormComponentTemplate
 * 
 * A production-ready form component.
 * 
 * Stack:
 * - React Hook Form (State management)
 * - Zod (Schema validation)
 * - TypeScript (Type safety)
 * 
 * Features:
 * - Real-time validation
 * - Semantic HTML structure
 * - Accessible error messages (aria-invalid, aria-describedby)
 * - Loading & Error states
 */
const FormComponentTemplate: React.FC<FormComponentProps> = ({
    onSubmitSuccess,
    initialValues
}) => {
    const [serverError, setServerError] = useState<string | null>(null);

    // Initialize Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty, isValid },
        reset
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            email: '',
            role: 'user',
            notifications: false,
            bio: '',
            ...initialValues
        },
        mode: 'onBlur' // Validate on blur for better UX
    });

    /**
     * Handle form submission
     */
    const processForm: SubmitHandler<FormValues> = async (data) => {
        setServerError(null);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Form Submitted Successfully:', data);

            if (onSubmitSuccess) {
                onSubmitSuccess(data);
            }

            // Optional: Reset form after success
            // reset(); 
        } catch (error) {
            console.error('Submission error:', error);
            setServerError('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">User Registration</h2>

            {serverError && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 text-sm">
                    {serverError}
                </div>
            )}

            <form onSubmit={handleSubmit(processForm)} className="space-y-6" noValidate>

                {/* Username Field */}
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${errors.username ? 'border-red-500 bg-red-50' : 'border-gray-300'
                            }`}
                        placeholder="johndoe"
                        aria-invalid={errors.username ? 'true' : 'false'}
                        {...register('username')}
                    />
                    {errors.username && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.username.message}</p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                            }`}
                        placeholder="john@example.com"
                        aria-invalid={errors.email ? 'true' : 'false'}
                        {...register('email')}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
                    )}
                </div>

                {/* Role Selection */}
                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Role
                    </label>
                    <select
                        id="role"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                        {...register('role')}
                    >
                        <option value="user">User</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrator</option>
                    </select>
                    {errors.role && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.role.message}</p>
                    )}
                </div>

                {/* Bio */}
                <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                        Bio <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                        id="bio"
                        rows={3}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition ${errors.bio ? 'border-red-500' : 'border-gray-300'
                            }`}
                        {...register('bio')}
                    />
                    {errors.bio && (
                        <p className="mt-1 text-sm text-red-600" role="alert">{errors.bio.message}</p>
                    )}
                </div>

                {/* Checkbox */}
                <div className="flex items-center">
                    <input
                        id="notifications"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        {...register('notifications')}
                    />
                    <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
                        Receive email notifications about account activity
                    </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-all 
              ${isSubmitting
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                            }`}
                    >
                        {isSubmitting ? 'Processing...' : 'Register User'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormComponentTemplate;
