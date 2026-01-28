# E-Commerce Project Context

## Overview
Building an online store involves managing complex relationships between products, customers, and orders while ensuring secure transactions and high performance.

## Core Requirements
1.  **Product Catalogue**: Hierarchical categories, variants (size/color), and robust search (Faceted search).
2.  **Cart & Checkout**: Persistent cart state, guest checkout, address validation, and tax calculation.
3.  **Payments**: Integration with gateways (Stripe/PayPal), PCI DSS compliance (never store CVV).
4.  **Order Management**: Status workflows (Pending -> Paid -> Shipped), transactional emails.

## Architecture Decisions
-   **Monolith vs Microservices**: Start monolith (e.g., Shopify/Magento/WooCommerce or Custom Node/Laravel) unless scale > 10k orders/day.
-   **Database**: Relational (PostgreSQL/MySQL) for Orders/Inventory (ACID is critical). Elasticsearch/Algolia for Product Search.

## Logic Constraints
-   **Inventory**: Check stock *before* adding to cart and *again* at checkout payment step.
-   **Concurrency**: Handle race conditions where two users buy the last item (Database locking or optimistic concurrency).
-   **Pricing**: store prices as integers (cents) to avoid floating point errors.

## Tech Stack Recommendations
-   **Frontend**: Next.js/Hydrogen (SEO is vital), Tailwind CSS.
-   **Backend**: Node.js (MedusaJS), PHP (Magento/WooCommerce), or Python (Django-Oscar).
-   **Payment**: Stripe Elements.

## Security Checklist
- [ ] SSL/TLS everywhere.
- [ ] CSP headers to prevent XSS (stealing session cookies).
- [ ] Rate limiting on Checkout APIs (card testing attacks).

## Common Pitfalls
-   Trusting client-side prices. *Always* validate price on backend.
-   Not handling tax rules across different regions (use a service like Avalara or Stripe Tax).
