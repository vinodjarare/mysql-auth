# MySQL Authentication using Node.js and Sequelize

This is a simple example of how to authenticate users using MySQL, Node.js, and Sequelize ORM.

## Requirements

- Node.js (v12 or higher)
- MySQL server

## Installation

1. Clone this repository:

```bash
git clone https://github.com/vinodjarare/mysql-auth.git
```

2. Install dependencies:

```bash
cd mysql-auth-nodejs-sequelize
npm install
```

3. Create a new MySQL database and user for the application.

4. Create a .env file in the root of the project and set the following environment variables:

```makefile
PORT=3000
DB_HOST=your-mysql-host
DB_NAME=your-mysql-db-name
DB_USER=your-mysql-username
DB_PASSWORD=your-mysql-password
JWT_SEC=write something
JWT_EXP=5d
```

5. Start the application:

```bash
npm start
```

6. Usage

- Visit http://localhost:3000/api/register to create a new user account.
- Visit http://localhost:3000/api/login to log in with your user credentials.

7. Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- jwt
- bcryptjs
