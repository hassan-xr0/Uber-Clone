# Backend API Documentation

## `/users/register` Endpoint

### Description

The endpoint is used to create a new user account.

### Method:

`POST`

### Request Body

- `user`:
  - `fullname` (object):
    - `firstname`: String (required, min length 3)
    - `lastname`: String (optional, min length 3)
- `email`: String (required, valid email address)
- `password`: String (required, min length 6)

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Response

- Status Codes:
  - 201: User created successfully
  - 400: Validation error
  - 500: Internal server error
- Response Body:
  - On success (201):

#### Example Response Body

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ",
  "user": {
    "_id": "645295703b907758b5019387",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$DZF1yY8RW39QxZJW2BQIj.ZnjgJwJRvwV22J7GwW3B89wBx3GtRxW"
  }
}
```
