-- SQL Index Strategy Template
-- Optimising query performance for common access patterns

-- 1. Standard Index (B-Tree)
-- Usecase: Frequent lookups by single column (e.g., searching by email, status)
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_status ON orders(status);

-- 2. Composite Index (Multi-column)
-- Usecase: Queries filtering by multiple columns (Order is important! Left-to-Right)
-- Query: SELECT * FROM users WHERE last_name = 'Doe' AND first_name = 'John';
-- Query: SELECT * FROM users WHERE last_name = 'Doe'; (Also uses index)
CREATE INDEX idx_users_names ON users(last_name, first_name);

-- 3. Unique Index
-- Usecase: Enforce uniqueness and fast lookup
CREATE UNIQUE INDEX idx_users_username ON users(username);

-- 4. Partial Index
-- Usecase: Indexing only a subset of rows to save space
-- Example: We handle 'pending' orders often, but rarely 'completed' ones
CREATE INDEX idx_orders_pending 
ON orders(created_at) 
WHERE status = 'pending';

-- 5. covering Index (Include)
-- Usecase: Store extra data in leaf nodes to avoid table heap lookup (Index Only Scan)
-- Postgres specific syntax
CREATE INDEX idx_orders_user_amount 
ON orders(user_id) 
INCLUDE (total_amount);

-- 6. Full Text Search Index (GIN)
-- Usecase: Search functionality
-- CREATE INDEX idx_posts_content ON posts USING GIN (to_tsvector('english', content));
