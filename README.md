# **Subsify Backend**

Subscription Management Tool, reflecting its core functionality of simplifying subscription tracking and management. It emphasizes user empowerment by offering privacy-focused, manual entry-based tools for monitoring recurring expenses, reducing unnecessary costs, and enhancing financial control. Designed to stand apart from automated financial integration solutions, Subsify combines intuitive design, robust security, and actionable insights to address subscription fatigue effectively.

---

## **Table of Contents**

- [Dependencies](#dependencies)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Seeding the Database](#seeding-the-database)
- [Admin Credentials](#admin-credentials)
- [Acknowledgments](#acknowledgments)

---

## **Dependencies**

The Subsify backend leverages the following core technologies:

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **Sequelize**: ORM for database operations.
- **PostgreSQL**: Relational database for storing application data.
- **Jest**: Testing framework for automated tests.
- **jsonwebtoken**: For token-based authentication.
- **dotenv**: To manage environment variables.

---

## **Environment Variables**

To configure the application, create a `.env` file in the project root and include the following keys:

```env
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=subsify_db
DB_PORT=5432
DIALECT=postgres
JWT_SECRET=*yourANYJWTSec*
MAX_FILE_SIZE=10mb
PORT=5000
```


# **Database Setup**
- Install PostgreSQL:

Ensure PostgreSQL is installed on your system. Download PostgreSQL.
Create the Database:

Use the PostgreSQL CLI or a GUI tool like pgAdmin to create a new database named subsify_db.
Set Up Migrations:

- Run the following command to set up the database schema:
```npx sequelize-cli db:migrate```

# **Seeding the Database**
The application includes a script to seed the database with initial data for testing and development.

Run the following command to seed the database:

```npx sequelize-cli db:seed:all```

# **Running the Application**
Development Mode
Start the application with live-reload for development:

```npm run dev```


# **Acknowledgments**
Special thanks to:

- [Ibrahim Bashir](https://github.com/embashgit): Lead developer and primary contributor to this project.
- [Oezdemir Cetin]: For their invaluable guidance and constructive feedback.