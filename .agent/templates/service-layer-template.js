/**
 * @file Service Layer Template
 * @description Business logic layer for interacting with data and applying rules
 */

// const Model = require('./database-model-template');

class ResourceService {
    /**
     * Find all resources with optional filtering
     * @param {Object} filters 
     * @returns {Promise<Array>}
     */
    static async findAll(filters = {}) {
        // Business logic: Apply default limit if not specified
        // const limit = filters.limit || 10;
        // return await Model.find(filters).limit(limit);

        // Mock response
        return [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' }
        ];
    }

    /**
     * Find single resource by ID
     * @param {string} id 
     * @returns {Promise<Object|null>}
     */
    static async findById(id) {
        if (!id) throw new Error('ID is required');

        // return await Model.findById(id);

        // Mock response
        return { id, name: 'Item 1', details: 'Some details...' };
    }

    /**
     * Create a new resource
     * @param {Object} data 
     * @returns {Promise<Object>}
     */
    static async create(data) {
        // Business Logic: Validate business rules (not just types)
        if (data.name === 'Forbidden') {
            const error = new Error('This name is not allowed');
            error.statusCode = 422;
            throw error;
        }

        // Sanitize data
        const safeData = {
            ...data,
            createdAt: new Date()
        };

        // return await Model.create(safeData);

        // Mock response
        return { id: Date.now(), ...safeData };
    }

    /**
     * Update existing resource
     * @param {string} id 
     * @param {Object} updates 
     * @returns {Promise<Object|null>}
     */
    static async update(id, updates) {
        const existing = await this.findById(id);
        if (!existing) return null;

        // Apply updates
        // return await Model.findByIdAndUpdate(id, updates, { new: true });

        return { ...existing, ...updates };
    }

    /**
     * Delete resource
     * @param {string} id 
     * @returns {Promise<boolean>}
     */
    static async delete(id) {
        // Check dependencies or other rules before deletion

        // const result = await Model.deleteOne({ _id: id });
        // return result.deletedCount > 0;

        return true;
    }
}

module.exports = ResourceService;
