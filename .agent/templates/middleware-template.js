/**
 * @file Middleware Template
 * @description Custom Express middleware for logging req/res details and duration
 */

/**
 * Request Logging Middleware
 * 
 * Captures:
 * - Method & URL
 * - Request timestamp
 * - Response status code
 * - Duration of request processing
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const requestLogger = (req, res, next) => {
    const start = Date.now();

    // Log request start
    console.log(`[${new Date().toISOString()}] Incoming: ${req.method} ${req.url}`);

    // Create listener for response finish to log status and duration
    res.on('finish', () => {
        const duration = Date.now() - start;
        const status = res.statusCode;

        // Determine log level/color based on status (conceptual)
        let logLevel = 'INFO';
        if (status >= 500) logLevel = 'ERROR';
        else if (status >= 400) logLevel = 'WARN';

        console.log(
            `[${logLevel}] Completed: ${req.method} ${req.originalUrl} | Status: ${status} | Duration: ${duration}ms`
        );
    });

    // Proceed to next middleware/controller
    next();
};

/**
 * Example Validation Middleware
 * Checks if a required header exists.
 */
const requireApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({
            success: false,
            message: 'Missing API Key in headers'
        });
    }

    // Pass validation
    next();
};

module.exports = {
    requestLogger,
    requireApiKey
};
