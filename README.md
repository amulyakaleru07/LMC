# 🎓 Learning Management System (LMS) Project

This project is a **Learning Management System (LMS)** that I have **designed and developed** from scratch using the **MERN stack** (MongoDB, Express.js, React, Node.js). It uses **Tailwind CSS** and **DaisyUI** for modern responsive styling, **Cloudinary** for handling media uploads, and **Stripe** for secure payment processing. User authentication and account management are powered by **Clerk**, ensuring a seamless and secure user experience.
I have deployed the backend on **Vercel** and tested my REST APIs with **Postman**.

---

## 📚 Table of Contents

* [Overview](#overview)
* [Tech Preview](#tech-preview)
* [Key Features](#key-features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#usage)
* [Payments & Subscription](#payments--subscription)

---

## ✅ Overview

This LMS is a complete **web-based learning platform** that lets educators create courses, upload lectures and materials (stored on **Cloudinary**), and manage enrolled students. Students can securely register/login (using **Clerk**), enroll in courses, pay for premium content via **Stripe**, and track their course progress in an interactive dashboard.

The backend is built with **Express.js**, **Mongoose**, and is running on port `5000`. The frontend runs locally on port `5173`. For testing my backend APIs, I have used **Postman** to verify all user, course, and payment routes.

---

## 🔍 Tech Preview

* **Frontend:** Runs locally at [http://localhost:5173](http://localhost:5173)

---

## 🚀 Key Features

* 🔑 **Authentication:** User account creation & login with **Clerk**
* 🗂️ **Course Management:** Add, update, delete courses and upload multimedia content using **Cloudinary**
* 👩‍🎓 **Enrollments:** Users can enroll and see their progress
* 💳 **Secure Payments:** Integrated with **Stripe** for handling payments and subscriptions
* 📡 **API Testing:** All backend APIs tested using **Postman**
* 🎨 **Responsive UI:** Built with **React**, **Tailwind CSS**, **DaisyUI**
* 🔒 **Secure & Scalable:** Uses Express middleware, CORS, dotenv, SVIX webhooks, and secure tokens

---

## 🛠️ Prerequisites

Before running this project locally, make sure you have:

* [Node.js](https://nodejs.org/) (v14 or higher)
* [npm](https://www.npmjs.com/) (v6 or higher)
* [MongoDB](https://www.mongodb.com/) (Atlas or local)
* [Cloudinary](https://cloudinary.com/) account & credentials
* [Clerk](https://clerk.dev/) account & API keys
* [Stripe](https://stripe.com/) account & API keys
* [Postman](https://www.postman.com/) (optional, for API testing)

---

## ⚙️ Installation

1. **Clone this repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**

   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file inside the `server` directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=<your_mongodb_uri>
   FRONTEND_URL=http://localhost:5173

   CLERK_SECRET_KEY=<your_clerk_secret_key>
   CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>

   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
   STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>

   CLOUDINARY_NAME=<your_cloudinary_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_SECRET_KEY=<your_cloudinary_api_secret>
   ```

---

## ▶️ Usage

1. **Run the backend server**

   ```bash
   cd server
   npm run dev
   ```

   > Runs on **[http://localhost:5000](http://localhost:5000)**

2. **Run the frontend client**

   ```bash
   cd ../client
   npm run dev
   ```

   > Runs on **[http://localhost:5173](http://localhost:5173)**

3. **API Testing**

   Use **Postman** to test authentication, course CRUD, enrollments, and payment routes.

---

## 💵 Payments & Subscription

* **Integrated with Stripe:** Users can purchase course access securely.
* **Webhook handling:** Uses **SVIX** to handle Stripe events.
* **User Subscription Flow:**

  * Browse available courses
  * Add to cart & checkout securely with Stripe
  * View purchased courses & learning progress in their dashboard

---

## 🧩 What I Used

* **Clerk:** Easy and secure user sign-up & management.
* **Express.js:** API routing, middleware, JWT auth.
* **Mongoose:** MongoDB data models.
* **Cloudinary:** Store and deliver uploaded media.
* **Stripe:** Handle secure payments.
* **Multer:** Handle file uploads.
* **SVIX:** Manage Stripe webhooks.
* **dotenv, cors, nodemon:** Essential backend utilities.
* **Tailwind CSS + DaisyUI:** Responsive and clean UI design.

---




