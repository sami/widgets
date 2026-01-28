/**
 * @file REST Endpoint Template
 * @description Express Router definition for a RESTful resource
 */

const express = require('express');
const router = express.Router();

// Import Controller and Middleware
const ResourceController = require('./express-controller-template');
// const AuthMiddleware = require('./middleware/auth');
// const ValidationMiddleware = require('./middleware/validation');

/**
 * @route   GET /api/v1/resources
 * @desc    Get all resources
 * @access  Public
 */
router.get(
    '/',
    // ValidationMiddleware.queryFilters, 
    ResourceController.getAll
);

/**
 * @route   GET /api/v1/resources/:id
 * @desc    Get resource by ID
 * @access  Public
 */
router.get(
    '/:id',
    // ValidationMiddleware.paramId, 
    ResourceController.getById
);

/**
 * @route   POST /api/v1/resources
 * @desc    Create new resource
 * @access  Private (Admin only)
 */
router.post(
    '/',
    // AuthMiddleware.authenticate,
    // AuthMiddleware.authorize(['admin']),
    // ValidationMiddleware.createResource,
    ResourceController.create
);

/**
 * @route   PUT /api/v1/resources/:id
 * @desc    Update resource
 * @access  Private
 */
router.put(
    '/:id',
    // AuthMiddleware.authenticate,
    // ValidationMiddleware.updateResource,
    ResourceController.update
);

/**
 * @route   DELETE /api/v1/resources/:id
 * @desc    Delete resource
 * @access  Private (Admin only)
 */
router.delete(
    '/:id',
    // AuthMiddleware.authenticate,
    // AuthMiddleware.authorize(['admin']),
    ResourceController.delete
);

module.exports = router;
