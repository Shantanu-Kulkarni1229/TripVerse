
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



          
# Adding Login Endpoint Documentation to README.md

I'll update the README.md file to include documentation for the `/users/login` endpoint based on the code in your controller and routes files.

```markdown:c:\Users\shant\Desktop\Uber Clone\Backend\Readme.md
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

## User Login Endpoint

### Endpoint: `/users/login`

**Method:** POST

**Description:**  
This endpoint authenticates existing users by verifying their email and password. Upon successful authentication, it returns a JWT token along with the user data.

### Request Body

The request must include a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Field Requirements:

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| email | String | Yes | Must be a valid email format |
| password | String | Yes | Minimum 6 characters |

### Responses

#### Success Response

**Code:** 200 OK

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
**Condition:** If validation fails (invalid email or short password)  
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

**Code:** 401 Unauthorized  
**Condition:** If email doesn't exist or password doesn't match  
**Content Example:**

```json
{
  "error": "Invalid credentials"
}
```

### Implementation Notes

- The password comparison is done using a secure method (comparePassword)
- The system doesn't reveal whether the email or password was incorrect (for security)
- The login process generates a new JWT token on each successful login
- The password field is not included in the response




          




## User Profile Endpoint

### Endpoint: `/users/profile`

**Method:** GET

**Description:**  
This endpoint retrieves the authenticated user's profile information. The request must include a valid JWT token, either in the `Authorization` header or as a cookie named `token`.

### Headers

- `Authorization: Bearer <jwt_token>` (optional if cookie is set)

### Responses

#### Success Response

**Code:** 200 OK

**Content Example:**
```json
{
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

**Code:** 401 Unauthorized  
**Condition:** If the token is missing, invalid, or expired  
**Content Example:**
```json
{
  "message": "Unauthorized"
}
```

### Implementation Notes

- Requires authentication via JWT token
- Returns the user object associated with the token

// ... existing code ...

## User Logout Endpoint

### Endpoint: `/users/logout`

**Method:** GET

**Description:**  
This endpoint logs out the authenticated user by clearing the authentication token cookie and blacklisting the token.

### Headers

- `Authorization: Bearer <jwt_token>` (optional if cookie is set)

### Responses

#### Success Response

**Code:** 200 OK

**Content Example:**
```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses

**Code:** 401 Unauthorized  
**Condition:** If the token is missing, invalid, or already blacklisted  
**Content Example:**
```json
{
  "message": "Unauthorized"
}
```

### Implementation Notes

- Requires authentication via JWT token
- The token is blacklisted to prevent reuse
- The `token` cookie is cleared on logout



    

## Captain Registration Endpoint

### Endpoint: `/captains/register`

**Method:** POST

**Description:**  
This endpoint allows new captains to register for the Uber Clone application. It creates a new captain account with vehicle details, hashes the password for security, and returns an authentication token along with the captain data.

### Request Body

The request must include a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.driver@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "MH 21 AB 2024",
    "capacity": 3,
    "vehicleType": "car"
  }
}
```

#### Field Requirements:

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| fullname.firstname | String | Yes | Minimum 3 characters |
| fullname.lastname | String | No | Minimum 3 characters if provided |
| email | String | Yes | Must be a valid email format |
| password | String | Yes | Minimum 6 characters |
| vehicle.color | String | Yes | Minimum 3 characters |
| vehicle.plate | String | Yes | Minimum 3 characters |
| vehicle.capacity | Number | Yes | Minimum 1 |
| vehicle.vehicleType | String | Yes | Must be one of: 'car', 'motorcycle', 'auto' |

### Responses

#### Success Response

**Code:** 201 Created

**Content Example:**

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "MH 21 AB 2024",
      "capacity": 3,
      "vehicleType": "car"
    }
  }
}
```

#### Error Responses

**Code:** 400 Bad Request  
**Condition:** If validation fails (invalid email, short firstname, short password, etc.)  
**Content Example:**

```json
{
  "errors": [
    {
      "value": "ab",
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

**Code:** 400 Bad Request  
**Condition:** If captain with the same email already exists  
**Content Example:**

```json
{
  "message": "Captain already exist"
}
```

**Code:** 500 Internal Server Error  
**Condition:** If there's a server error during captain creation  
**Content Example:**

```json
{
  "error": "All fields are required"
}




```
 

# Captain Login Endpoint

### Endpoint: `/captains/login`

**Method:** POST

**Description:**  
This endpoint authenticates existing captains by verifying their email and password. Upon successful authentication, it returns a JWT token along with the captain data.

### Request Body

The request must include a JSON object with the following structure:

```json
{
  "email": "john.driver@example.com",
  "password": "password123"
}
```

#### Field Requirements:

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| email | String | Yes | Must be a valid email format |
| password | String | Yes | Minimum 6 characters |

### Responses

#### Success Response

**Code:** 200 OK

**Content Example:**

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "MH 21 AB 2024",
      "capacity": 3,
      "vehicleType": "car"
    }
  }
}
```

#### Error Responses

**Code:** 400 Bad Request  
**Condition:** If validation fails (invalid email or short password)  
**Content Example:**

```json
{
  "errors": [
    {
      "value": "test",
      "msg": "Invalid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```

**Code:** 401 Unauthorized  
**Condition:** If email doesn't exist or password doesn't match  
**Content Example:**

```json
{
  "message": "Invalid credentials"
}
```

## Captain Profile Endpoint

### Endpoint: `/captains/profile`

**Method:** GET

**Description:**  
This endpoint retrieves the authenticated captain's profile information. The request must include a valid JWT token, either in the `Authorization` header or as a cookie named `token`.

### Headers

- `Authorization: Bearer <jwt_token>` (optional if cookie is set)

### Responses

#### Success Response

**Code:** 200 OK

**Content Example:**
```json
{
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.driver@example.com",
    "status": "inactive",
    "vehicle": {
      "color": "red",
      "plate": "MH 21 AB 2024",
      "capacity": 3,
      "vehicleType": "car"
    },
    "location": {
      "lat": 12.9716,
      "lng": 77.5946
    }
  }
}
```

#### Error Responses

**Code:** 401 Unauthorized  
**Condition:** If the token is missing, invalid, or expired  
**Content Example:**
```json
{
  "message": "Unauthorized"
}
```

### Implementation Notes

- Requires authentication via JWT token using the authCaptain middleware
- Returns the captain object associated with the token
- The captain's location will be included if available

## Captain Logout Endpoint

### Endpoint: `/captains/logout`

**Method:** GET

**Description:**  
This endpoint logs out the authenticated captain by clearing the authentication token cookie and blacklisting the token.

### Headers

- `Authorization: Bearer <jwt_token>` (optional if cookie is set)

### Responses

#### Success Response

**Code:** 200 OK

**Content Example:**
```json
{
  "message": "Logged out succesfully"
}
```

#### Error Responses

**Code:** 401 Unauthorized  
**Condition:** If the token is missing, invalid, or already blacklisted  
**Content Example:**
```json
{
  "message": "Unauthorized"
}
```

