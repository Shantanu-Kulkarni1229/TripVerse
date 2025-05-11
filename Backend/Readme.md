
# Uber Clone API Documentation

## User Registration Endpoint

### Endpoint: `/users/register`

**Method:** POST

**Description:**  
This endpoint allows new users to register for the Uber Clone application. It creates a new user account, hashes the password for security, and returns an authentication token along with the user data.

### Request Body

The request must include a JSON object with the following structure:

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

#### Field Requirements:

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| fullname.firstname | String | Yes | Minimum 3 characters |
| fullname.lastname | String | No | Minimum 3 characters if provided |
| email | String | Yes | Must be a valid email format |
| password | String | Yes | Minimum 6 characters |

### Responses

#### Success Response

**Code:** 201 Created

**Content Example:**

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error Responses

**Code:** 400 Bad Request  
**Condition:** If validation fails (invalid email, short firstname, or short password)  
**Content Example:**

```json
{
  "errors": [
    {
      "value": "test",
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

**Code:** 500 Internal Server Error  
**Condition:** If there's a server error during user creation  
**Content Example:**

```json
{
  "error": "All fields are required"
}
```

### Implementation Notes

- Passwords are hashed using bcrypt before storage
- Authentication tokens are generated using JWT
- Email addresses must be unique in the system
- The socketId field is optional in the database schema
```