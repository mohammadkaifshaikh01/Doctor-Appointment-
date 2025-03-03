# Doc Connect

Doc Connect is a full-stack web application that allows users to book appointments with doctors. The project includes CRUD operations, authentication, and appointment booking features.

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios (for API calls)
- React Router (for navigation)

### Backend
- Node.js (Express.js)
- MongoDB (Mongoose ORM)
- JWT Authentication
- bcrypt (for password hashing)

## Features

### User Features:
- Sign up and log in securely.
- Book appointments with doctors.
- View and manage booked appointments.
- Edit profile information.

### Doctor Features:
- Register and log in.
- Manage appointment requests.
- Update availability and profile information.

### Admin Features:
- Manage users and doctors.
- View and delete appointments.
- Handle authentication and security.

## Installation

### Prerequisites:
- Node.js and npm installed
- MongoDB database set up

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/mohammadkaifshaikh01/Doctor-Appointment-.git
   cd Doctor-Appointment-
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory with:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Start the backend server:
   ```sh
   cd backend
   npm start
   ```

5. Start the frontend:
   ```sh
   cd frontend
   npm run dev
   ```

## API Endpoints

### Authentication:
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Appointments:
- `POST /api/appointments` - Book an appointment
- `GET /api/appointments` - Get user appointments
- `PUT /api/appointments/:id` - Update an appointment
- `DELETE /api/appointments/:id` - Cancel an appointment

## Contributing
Feel free to fork the repository and submit pull requests for improvements!

## License
This project is licensed under the MIT License.

