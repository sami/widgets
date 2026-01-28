# Real-Time Application Context

## Overview
Real-time apps (Chat, Live Coding, Stock Tickers) require persistent connections and low latency.

## Core Requirements
1.  **Transport**: WebSockets (Bidirectional) or Server-Sent Events (SSE - Server to Client only).
2.  **State**: Presence (Who is online?) and History (What happened while I was disconnected?).

## Architecture Decisions
-   **Scaling**: WebSockets are stateful. You need a "Sticky Session" or a Pub/Sub backplane (Redis) to broadcast messages across multiple server instances.
-   **Protocol**: Socket.io (Easy) vs Raw WS (Lightweight).

## Logic Constraints
-   **Connection Limits**: A single server can handle ~65k concurrent connections (file descriptors). OS tuning required.
-   **Reconnection**: Exponential backoff strategy is mandatory to prevent thundering herd.

## Tech Stack Recommendations
-   **Frontend**: React Query (Server state), Socket.io-client.
-   **Backend**: Node.js (Event loop implies good concurrency), Redis (Pub/Sub).

## Common Pitfalls
-   Using HTTP polling when WS is needed.
-   Memory leaks from unclosed socket listeners.
