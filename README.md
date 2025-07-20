

# Learning Management System (LMS) 🚀

I have **designed and developed** this **Learning Management System (LMS)** as a full-stack web application using the **MERN stack** (MongoDB, Express.js, React, Node.js). For styling, I integrated **Tailwind CSS** and **DaisyUI**, while **Cloudinary** handles media asset management and **Razorpay** powers secure subscription payments.

---

## 📌 Overview

This LMS platform streamlines online learning by enabling **course creation**, **content management**, **user enrollment**, and **progress tracking** within a clean, intuitive user interface. Educators can build and manage rich course content, while learners can seamlessly browse, enroll, and track their progress. Secure payment flows are handled through **Razorpay**, ensuring a smooth subscription experience.

---

## ⚙️ Key Features

* 🔒 **Robust Authentication & Authorization** — Secure user login and role-based access control.
* 🎓 **Dynamic Course Management** — Create, edit, and remove courses effortlessly.
* ☁️ **Cloud-Based Media Handling** — Upload and serve course assets via Cloudinary.
* 📈 **Enrollment & Progress Tracking** — Track learner engagement and course completion.
* 💸 **Integrated Payments** — Manage premium subscriptions with Razorpay.
* 🖥️ **Responsive Design** — Fully responsive UI built with React, Tailwind CSS, and DaisyUI.
* 📊 **Admin Dashboard** — Monitor subscriptions, students, and revenue insights.

---

## ✅ Tech Stack & Dependencies

* **Frontend:** React, Tailwind CSS, DaisyUI
* **Backend:** Node.js, Express.js, MongoDB (Mongoose)
* **Auth:** Clerk Authentication
* **Media:** Cloudinary API
* **Payments:** Razorpay API
* **Misc:** JWT, Axios, React Router

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed locally:

* [Node.js](https://nodejs.org/) (v14+)
* [npm](https://www.npmjs.com/) (v6+)
* [MongoDB](https://www.mongodb.com/) (v4+)

---

### Installation Steps

1️⃣ **Clone the project:**

```bash
git clone https://github.com/Sukomal07/learning-management-system.git
cd learning-management-system
```

2️⃣ **Install server dependencies:**

```bash
cd server
npm install
```

3️⃣ **Install client dependencies:**

```bash
cd ../client
npm install
```

4️⃣ **Configure environment variables:**
Create a `.env` file inside the `server` folder with:

```env
PORT=5000
MONGO_URI=<your_mongodb_uri>
FRONTEND_URL=http://localhost:5173
JWT_SECRET=<your_jwt_secret>
JWT_EXPIRE=<jwt_expiration>
CLOUD_NAME=<your_cloudinary_name>
API_KEY=<your_cloudinary_api_key>
API_SECRET=<your_cloudinary_api_secret>
GMAIL_ID=<your_gmail_id>
APP_PASSWORD=<your_gmail_app_password>
RAZORPAY_API_KEY=<your_razorpay_api_key>
RAZORPAY_PLAN_ID=<your_razorpay_plan_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>
```

---

## 💻 Running the Application

**Start the server:**

```bash
cd server
npm run dev
```

**Start the client:**

```bash
cd ../client
npm run dev
```

**Access locally:** [http://localhost:5173](http://localhost:5173)


## 💼 Subscription Management

The LMS integrates **Razorpay** for seamless payment processing:

* Users can explore available subscription plans.
* Payments are securely handled via Razorpay’s checkout.
* Subscriptions can be canceled directly through the user dashboard.
