/**
 * @file Database Seeder Template
 * @description Script to populate the database with initial/dummy data
 */

const usersData = [
    {
        username: 'admin',
        email: 'admin@example.com',
        password: 'hashed_password_123', // In real app, use bcrypt
        role: 'admin',
        is_active: true
    },
    {
        username: 'jdoe',
        email: 'john@example.com',
        password: 'hashed_password_123',
        role: 'user',
        is_active: true
    }
];

const productsData = [
    { name: 'Widget A', price: 9.99, stock: 100 },
    { name: 'Widget B', price: 19.99, stock: 50 },
    { name: 'Gadget C', price: 49.99, stock: 0 }
];

/**
 * Seed Function
 * 
 * @param {Object} db - Database connection instance (Knex/Sequelize/Client)
 */
async function seed(db) {
    try {
        console.log('🌱 Starting database seed...');

        // 1. Clear existing data
        // await db('users').del();
        // await db('products').del();
        console.log('Cleared existing tables');

        // 2. Insert Users
        // await db('users').insert(usersData);
        console.log(`Initialized ${usersData.length} users`);

        // 3. Insert Products
        // await db('products').insert(productsData);
        console.log(`Initialized ${productsData.length} products`);

        console.log('✅ Seeding complete!');
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    }
}

// Execute if run directly
if (require.main === module) {
    // Mock DB instance
    const mockDb = () => ({
        del: () => Promise.resolve(),
        insert: (data) => Promise.resolve(data)
    });

    seed(mockDb());
}

module.exports = seed;
