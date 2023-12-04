# ReservaLabs

Welcome to the ReservaLabs, a web application designed to manage reservations for computer lab seats. This system enables registered students to reserve seats in computer labs, while lab technicians can manage reservations and block time slots for walk-in students. Below, you'll find a comprehensive guide to the features and functionalities of this application.

## Table of Contents
- [Features](#features)
- [User Accounts](#user-accounts)
- [Reservation Management](#reservation-management)
- [User Profiles](#user-profiles)
- [General Information](#general-information)

---

## Features

### View Slot Availability
- Users can select a computer lab to view the current availability of seats.
- Availability for the next 7 days can be checked.
- Students can reserve seats, and availability updates automatically.

### Register
- Visitors can register with their DLSU email and password.
- Two types of accounts are available: student (for reserving lab slots) and lab technician (for blocking time slots).

### Login
- Registered users can log in to access the reservation system.
- An option for "Remember Me" is provided, extending login sessions for 3 weeks.

### Logout
- Users can log out, ending their "Remember Me" session and clearing session-related data.

### Reserve
- Students can reserve available slots in 30-minute intervals.
- The option to reserve anonymously is available.
- Multiple slots can be reserved under a single reservation, and previously reserved slots cannot be rebooked.

### Reserve for a Student
- Lab technicians can make reservations on behalf of walk-in students.

### Remove Reservation
- Lab technicians have the ability to remove reservations of students who do not show up within 10 minutes of their reservation.

### Edit Reservation
- Students can edit their own reservations.
- Lab technicians can edit any reservations.

### See Reservations
- Users can check their reservations, including seat numbers, laboratory details, request date and time, and reservation date and time.

### View / Edit User Profile
- Registered users can edit their profiles, including a profile picture and description.
- User profiles display the student's current reservations.
- Users can view public profiles of other users but cannot edit them.

### Delete User Account
- Students have the option to delete their accounts, cancel any pending reservations.

### Search for Users / Free Slots
- Users can view all available slots for a given date, time, and laboratory.

---

## User Accounts

The system supports two types of accounts:

1. **Student Account**: Allows students to reserve lab slots.
2. **Lab Technician Account**: Grants lab technicians the ability to manage reservations and block time slots for walk-in students.

---

## Reservation Management

- Students can reserve seats in 30-minute intervals.
- Reservations can be made anonymously.
- Lab technicians can make reservations for walk-in students.
- Lab technicians can remove reservations for no-shows within 10 minutes of the reservation time.
- Both students and lab technicians can edit reservations.

---

## User Profiles

- Registered users can edit their profiles, including profile pictures and descriptions.
- User profiles display the student's current reservations.
- Users can view public profiles of other users but cannot edit them.

---

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Configuration

When setting up the server, make sure to configure the following environment variables in a `.env` file:

- **SERVER_PORT**: `3000`
  - Description: Port number on which the server will run.

- **DB_NAME**: `ReservaLabsDB`
  - Description: Name of the MongoDB database.

- **MONGODB_URI**: (get it from your own MongoDB Atlas)
  - Description: Connection URI for MongoDB Atlas. Obtain it from your own MongoDB Atlas account.

---

# Render Website Setup

To deploy the ReservaLabs Phase 3 website on Render, follow these steps and ensure the specified settings are configured in the Build & Deploy section.

## Repository

- **Repository:** [https://github.com/aaronnicolas/ReservaLabs-Phase-3](https://github.com/aaronnicolas/ReservaLabs-Phase-3)

## Branch

- **Branch:** main

## Build & Deploy

Ensure the following commands are set in the Build & Deploy section of Render:

- **Build Command:** `$ yarn`

- **Start Command:** `$ npm start`

- **Auto-Deploy:** Yes

This configuration will ensure that the website is built and deployed correctly on Render.

## General Information

The Lab Reservation System provides a user-friendly and visually appealing experience. Visitors can navigate the system easily, and all information is readily accessible. The design is consistent and cohesive throughout the application, aligning with the system's theme.

For additional information or support, please refer to the user documentation or contact our support team.

Thank you for using the Lab Reservation System!
