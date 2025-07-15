MERN Product CRUD Application with Authentication
Project Overview
A full-stack MERN application that enables users to:

Securely register and log in using JWT authentication

Perform CRUD operations on products (Create, Read, Update, Delete)

Search products by name

Access protected routes (authenticated users only)

Receive feedback via React Toastify notifications

Store data persistently in MongoDB

Tech Stack
Frontend: React, Tailwind CSS, React Router, Axios, React Toastify

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT, Context API

Database: MongoDB

Features
User authentication (register/login)

Create products with name, price, and quantity

View all products with search functionality

Edit existing product details

Delete products

Responsive UI with Tailwind CSS

Toast notifications for user actions

Setup Instructions
1. Clone the Repository
bash
git clone https://github.com/your-username/mern-product-crud.git
cd mern-product-crud
2. Backend Setup
bash
cd backend
npm install
npm run server
The .env file is included with default configurations

3. Frontend Setup
bash
cd ../frontend
npm install
npm run dev