/**
 * @file Express Controller Template
 * @description Standard controller with CRUD operations and error handling wrapper
 */

const ServiceLayer = require('./service-layer-template'); // Hypothetical import

/**
 * Controller for handling Resource operations.
 * 
 * Best Practices:
 * - Keep controllers thin (delegate logic to services)
 * - Always use try/catch with async/await
 * - Use next(err) for global error handling
 * - Validate input (though normally done in middleware)
 */
class ResourceController {

    /**
     * Get all resources
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     * @param {import('express').NextFunction} next 
     */
    static async getAll(req, res, next) {
        try {
            const filters = req.query;
            const data = await ServiceLayer.findAll(filters);

            return res.status(200).json({
                success: true,
                data,
                timestamp: new Date().toISOString()
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Get resource by ID
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     * @param {import('express').NextFunction} next 
     */
    static async getById(req, res, next) {
        try {
            const { id } = req.params;
            const data = await ServiceLayer.findById(id);

            if (!data) {
                const error = new Error('Resource not found');
                error.statusCode = 404;
                throw error;
            }

            return res.status(200).json({
                success: true,
                data
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Create new resource
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     * @param {import('express').NextFunction} next 
     */
    static async create(req, res, next) {
        try {
            const payload = req.body;

            // Basic validation (or rely on middleware)
            if (!payload.name) {
                const error = new Error('Name is required');
                error.statusCode = 400;
                throw error;
            }

            const createdItem = await ServiceLayer.create(payload);

            return res.status(201).json({
                success: true,
                data: createdItem,
                message: 'Resource created successfully'
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Update resource
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     * @param {import('express').NextFunction} next 
     */
    static async update(req, res, next) {
        try {
            const { id } = req.params;
            const updates = req.body;

            const updatedItem = await ServiceLayer.update(id, updates);

            if (!updatedItem) {
                const error = new Error('Resource not found or failed to update');
                error.statusCode = 404;
                throw error;
            }

            return res.status(200).json({
                success: true,
                data: updatedItem,
                message: 'Resource updated successfully'
            });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Delete resource
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     * @param {import('express').NextFunction} next 
     */
    static async delete(req, res, next) {
        try {
            const { id } = req.params;

            const success = await ServiceLayer.delete(id);

            if (!success) {
                const error = new Error('Resource not found');
                error.statusCode = 404;
                throw error;
            }

            return res.status(200).json({
                success: true,
                message: 'Resource deleted successfully'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ResourceController;
