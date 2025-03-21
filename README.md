# MediConnect - Doctor Appointment Booking System

## 🏥 Overview
MediConnect is a modern web application designed to simplify doctor appointment bookings by offering **real-time availability checks**, **telehealth integration**, and **automated notifications**. It enhances patient experience, reduces no-show rates, and improves clinic efficiency.





![Screenshot 2025-03-21 111055](https://github.com/user-attachments/assets/c8bf2fc8-5695-43fb-9ef0-f31168592414)




![Screenshot 2025-03-21 111136](https://github.com/user-attachments/assets/427c35a1-2efd-4137-b790-476a507a2986)


---

## ✨ Features
✅ **Real-Time Appointment Booking** – Instantly check doctor availability and book slots.  
✅ **Telehealth Integration** – Secure video consultations for remote healthcare.  
✅ **Automated Notifications** – Email confirmations and reminders to reduce missed appointments.  
✅ **Doctor & Patient Dashboard** – Manage appointments, patient history, and availability.  
✅ **Secure Authentication** – JWT-based login system for enhanced security.  
✅ **Admin Panel** – Manage users, doctors, and system settings.  

---

## 🛠️ Tech Stack
- **Frontend**: React.js (with Redux for state management)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

---

## 🚀 Installation & Setup
### Prerequisites
Ensure you have **Node.js**, **npm**, and **MongoDB** installed on your system.

### 🔧 Steps to Set Up
1️⃣ **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/mediconnect.git
   cd mediconnect
   ```

2️⃣ **Install dependencies**  
   ```sh
   cd frontend && npm install
   cd ../backend && npm install
   ```

3️⃣ **Set up environment variables**  
   Create a `.env` file in the `backend` directory and configure:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4️⃣ **Run the backend server**  
   ```sh
   cd backend
   npm start
   ```

5️⃣ **Run the frontend**  
   ```sh
   cd frontend
   npm start
   ```

---

## 📌 API Endpoints
### 🔹 User Authentication
- **POST /api/auth/register** – Register a new user
- **POST /api/auth/login** – User login

### 🔹 Appointments
- **GET /api/appointments** – Fetch available appointments
- **POST /api/appointments/book** – Book an appointment
- **DELETE /api/appointments/:id** – Cancel an appointment

---

## 🤝 Contribution
Contributions are welcome! Fork the repository and submit a pull request to improve MediConnec

🚀 *Empowering healthcare with seamless digital solutions!*

