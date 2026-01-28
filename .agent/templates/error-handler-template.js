/**
 * @file Error Handler Template
 * @description Global error handling middleware for Express
 */

/**
 * Standard API Error Class
 */
class ApiError extends Error {
    constructor(message, statusCode, details = null) {
        super(message);
        this.statusCode = statusCode;
        this.details = details;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true; // Marks trusted errors vs bugs

        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Global Error Handler Middleware
 * 
 * @param {Error} err - The error object
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    const response = {
        success: false,
        message: err.message || 'Internal Server Error',
        timestamp: new Date().toISOString()
    };

    // Add extra details for development or validation errors
    if (process.env.NODE_ENV === 'development') {
        response.stack = err.stack;
        if (err.details) response.details = err.details;
    }

    // Handle specific error types (e.g., Database constraints)
    if (err.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).json({
            ...response,
            message: 'Duplicate entry detected',
            statusCode: 409
        });
    }

    console.error(`[Error] ${req.method} ${req.url}:`, err.message);

    res.status(statusCode).json(response);
};

module.exports = {
    errorHandler,
    ApiError
};
