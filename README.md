# Meeting Room Booking System for Co-working spaces

Welcome to the Meeting Room Booking System, a comprehensive solution for managing meeting room bookings. This application allows users to book rooms for specific time slots, providing an easy-to-use experience for both users and administrators.

## Live URL

The live version of the application is hosted at: [https://meeting-room-booking-system-assignment-3.vercel.app/](https://meeting-room-booking-system-assignment-3.vercel.app/)

## Features

- **User Authentication**: Secure login and registration for users and administrators.
- **Room Management**: Admins can add, update, and delete room details.
- **Slot Management**: Admins can manage booking slots for each room.
- **Booking Management**: Users can book rooms for specific slots, and admins can manage all bookings.
- **Booking Confirmation**: Admins can confirm or cancel bookings.
- **Soft Delete**: Bookings can be soft deleted to maintain history while not displaying them to users.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Token)
- **Middleware**: Express Middleware for request handling and validation
- **Deployment**: Deployed on Vercel

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- Node.js (>= 12.x)
- MongoDB (local instance or a cloud database like MongoDB Atlas)
- Git

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/salmanabdullahfahim/meeting-room-booking-system-for-co-working-spaces.git
cd room-booking-system

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Environment Variables

NODE_ENV=development
PORT=5000
DB_URL=mongodb://localhost:27017/room-booking
JWT_ACCESS_SECRET=your_jwt_secret_key
JWT_ACCESS_EXPIRE_IN=your choice

### 4. Start the Application

```bash
npm run start:dev

```
