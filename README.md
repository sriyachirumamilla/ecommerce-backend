# ecommerce-backend

RESTful API backend for an e-commerce application with user authentication, product management, and order creation features.

## Features

1. **User Registration & Authentication**:

   - **Register**: Create a new account with a name, email, and password.
   - **Login**: Access account with email and password to receive a JWT token for session handling.

2. **Product Management**:

   - **Add Product**: (Requires JWT) Add a new product with details such as name, description, price, and category.
   - **Get Products with Pagination**: Retrieve a list of products with pagination options for optimized loading.

3. **Order Management**:
   - **Create Order**: (Requires JWT) Place an order by specifying product IDs and the total price.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via MongoDB Atlas)

## Setup Instructions

1. Clone the repository.
2. Add your MongoDB URI and JWT secret to the `.env` file.
3. Install dependencies with `npm install`.
4. Run the server with `node server.js`.
