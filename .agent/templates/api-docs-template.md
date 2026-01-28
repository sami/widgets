# API Documentation

## Authentication
All API requests require an `Authorization` header with a valid Bearer token.
`Authorization: Bearer <your_token>`

## Base URL
https://api.example.com/v1

## Endpoints

### 1. Get Users
Retrieve a paginated list of users.

- **URL**: `/users`
- **Method**: `GET`
- **Auth Required**: Yes

#### Parameters
| Name | Type | Required | Description |
|---|---|---|---|
| page | integer | No | Page number (default: 1) |
| limit | integer | No | Items per page (default: 10) |

#### Success Response
**Code**: `200 OK`
```json
{
  "data": [
    {
      "id": "123",
      "username": "jdoe"
    }
  ],
  "meta": {
    "total": 50,
    "page": 1
  }
}
```

### 2. Create Order
Create a new order for a user.

- **URL**: `/orders`
- **Method**: `POST`
- **Auth Required**: Yes

#### Request Body
```json
{
  "product_id": "prod_999",
  "quantity": 2
}
```

#### Success Response
**Code**: `201 Created`
```json
{
  "success": true,
  "order_id": "ord_555"
}
```

#### Error Response
**Code**: `400 Bad Request`
```json
{
  "success": false,
  "error": "Insufficient stock"
}
```
