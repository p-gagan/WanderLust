# 🧭 Wanderlust - Stay Booking Web App

Wanderlust is a full-stack travel stay booking web application built as a project under Apna College’s Web Development Bootcamp. It allows users to browse, add, edit, and review travel listings. It includes user authentication, authorization, error handling, and integrates image upload and geolocation features.

---

## 🚀 Features

- 🏠 View all listings
- ➕ Add new stay listings
- ✏️ Edit or delete your listings
- 🔐 User registration and login
- ⭐ Flash messages for feedback
- 💬 Add and delete reviews
- 🗺️ Map integration using Mapbox
- 📸 Image uploads with Cloudinary
- ✅ Form validation using Joi
- ❌ Custom error handling
- 🔒 Authorization for protected routes

---

## 🛠️ Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose

### Frontend:
- EJS Templates + ejs-mate
- Bootstrap 5 (for styling)

### Authentication:
- Passport.js (Local Strategy)
- express-session
- connect-mongo

### Tools & APIs:
- Multer + Cloudinary (Image Upload)
- Mapbox (Geocoding)
- Joi (Validation)

---

## 📁 Folder Structure

Wanderlust/
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/
│   ├── listings.js
│   ├── review.js
│   └── user.js
├── utils/
│   └── ExpressError.js
│   └── middleware.js
├── views/
│   ├── listings/
│   ├── partials/
│   ├── reviews/
│   └── users/
├── public/
│   └── CSS & JS files
├── app.js
└── .env

## 🔧 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/your-username/wanderlust.git
cd wanderlust
### 2. Install Dependencies
npm install
### 3. Create .env File
Create a .env file in the root directory and add your credentials:
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPBOX_TOKEN=your_mapbox_token
### 4. Start the Server

npm start
App will run on http://localhost:8080

✍️ Author
Gagan Patel

Project under guidance of Apna College

📜 License
This project is licensed under the MIT License.

