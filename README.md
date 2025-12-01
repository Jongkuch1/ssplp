# 🎓 South Sudan Personalized Learning Platform (SSPLP)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Status: Production Ready](https://img.shields.io/badge/Status-Production%20Ready-green.svg)]()
[![Platform: Web](https://img.shields.io/badge/Platform-Web-orange.svg)]()

> **Academic Project - Educational Purpose Only**

> University summative assignment demonstrating full-stack web development

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo Accounts](#demo-accounts)
- [Quick Start](#quick-start)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [User Roles](#user-roles)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

⚠️ **This is a university summative assignment for educational purposes only.**

SSPLP is a prototype educational platform demonstrating full-stack web development capabilities. This academic project showcases:

- **15 Curriculum-Aligned Subjects**
- **Offline-First Architecture**
- **Role-Based Dashboards** (Student, Teacher, Admin)
- **Progress Tracking & Analytics**
- **Assessment & Quiz System**
- **Content Management**
- **Multi-Language Support** (English/Arabic)

## ✨ Features

### 🎯 For Students
- ✅ Access 15 curriculum-aligned subjects
- ✅ Take interactive quizzes and assessments
- ✅ Track learning progress with visual analytics
- ✅ View personalized recommendations
- ✅ Offline learning capability
- ✅ Beautiful profile management

### 👨‍🏫 For Teachers
- ✅ Upload and manage learning content
- ✅ Create custom quizzes and assessments
- ✅ Monitor student performance
- ✅ View class analytics and reports
- ✅ Manage multiple classes
- ✅ Track content creation statistics

### 🔐 For Administrators
- ✅ Manage all platform users
- ✅ View system-wide metrics
- ✅ Monitor platform performance
- ✅ Oversee content and curriculum
- ✅ Generate reports
- ✅ User role management

## 🔑 Demo Accounts

| Role | Email | Password | Access Level |
|------|-------|----------|--------------|
| **Student** | student@ssplp.org | student123 | Learning, Quizzes, Progress |
| **Teacher** | teacher@ssplp.org | teacher123 | Content, Quizzes, Analytics |
| **Admin** | admin@ssplp.org | admin123 | Full System Access |

## 🚀 Complete Setup Guide

### Prerequisites

**Required:**
- Web browser (Chrome, Firefox, Edge, Safari)
- Git (download from https://git-scm.com/)

**Optional (for backend):**
- Node.js v14+ (download from https://nodejs.org/)
- MongoDB (download from https://www.mongodb.com/try/download/community)

---

## 📦 Installation Steps

### Method 1: Frontend Only (Easiest - Recommended)

**Step 1: Download the Project**

```bash
# Open terminal/command prompt and run:
git clone https://github.com/Jongkuch1/ssplp.git

# Navigate into the project folder:
cd ssplp
```

**Step 2: Open the Application**

**Option A: Direct File Opening**
1. Navigate to the `frontend` folder
2. Double-click `index.html`
3. The application opens in your default browser

**Option B: Using Local Server (Recommended)**

*For Python users:*
```bash
cd frontend
python -m http.server 8000
```
Then open: http://localhost:8000

*For Node.js users:*
```bash
cd frontend
npx http-server -p 8000
```
Then open: http://localhost:8000

*For VS Code users:*
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

**Step 3: Login**

1. Click "Sign In" button
2. Use any demo account:
   - **Student**: student@ssplp.org / student123
   - **Teacher**: teacher@ssplp.org / teacher123
   - **Admin**: admin@ssplp.org / admin123
3. Start exploring!

✅ **That's it! The app works completely offline with localStorage.**

---

### Method 2: Full Stack (Frontend + Backend)

**Step 1: Install Prerequisites**

1. **Install Node.js**
   - Download from: https://nodejs.org/
   - Choose LTS version
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Install MongoDB** (Optional - we use MongoDB Atlas cloud)
   - Download from: https://www.mongodb.com/try/download/community
   - Follow installation wizard
   - Start MongoDB service:
     ```bash
     # Windows:
     net start MongoDB
     
     # Mac:
     brew services start mongodb-community
     
     # Linux:
     sudo systemctl start mongod
     ```

**Step 2: Clone Repository**

```bash
git clone https://github.com/Jongkuch1/ssplp.git
cd ssplp
```

**Step 3: Setup Backend**

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Start the server
npm start
```

You should see:
```
✅ MongoDB Connected
🚀 Server running on port 5000
```

**Step 4: Setup Frontend**

Open a **new terminal** window:

```bash
# Navigate to frontend folder
cd frontend

# Start local server
python -m http.server 8000
# OR
npx http-server -p 8000
```

**Step 5: Access Application**

1. Open browser: http://localhost:8000
2. Look for green "Backend Connected" badge at bottom-right
3. Login with demo accounts
4. Data now saves to MongoDB!

---

## 🔧 Troubleshooting

### "Git not found"
- Install Git from https://git-scm.com/
- Restart terminal after installation

### "Node not found"
- Install Node.js from https://nodejs.org/
- Restart terminal after installation

### "Port already in use"
- Change port number:
  ```bash
  python -m http.server 3000  # Use different port
  ```

### "MongoDB connection error"
- The app still works with localStorage
- Backend is optional
- MongoDB Atlas is pre-configured

### "Cannot find module"
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### "CORS error"
- Make sure backend is running on port 5000
- Frontend should be on different port (8000)

---

## ✅ Verification Checklist

**Frontend Working:**
- [ ] Can open index.html in browser
- [ ] Can see landing page
- [ ] Can click "Sign In" button
- [ ] Can login with demo account
- [ ] Can see dashboard

**Backend Working (Optional):**
- [ ] `npm start` runs without errors
- [ ] Can visit http://localhost:5000/api/health
- [ ] See green "Backend Connected" badge
- [ ] Login creates user in MongoDB

---

## 🎯 Quick Commands Reference

**Start Frontend:**
```bash
cd frontend
python -m http.server 8000
```

**Start Backend:**
```bash
cd backend
npm start
```

**Stop Servers:**
- Press `Ctrl + C` in terminal

**Reset Demo Data:**
- Click "Reset Demo Data" button on login page
- Or clear browser localStorage (F12 → Application → Local Storage → Clear)

---

## 📱 Access Points

- **Landing Page**: http://localhost:8000/
- **Login**: http://localhost:8000/login.html
- **Register**: http://localhost:8000/register.html
- **Backend API**: http://localhost:5000/api/health
- **API Docs**: http://localhost:5000/api/

---

## 🎓 For Evaluators/Instructors

**Fastest Way to Run:**
1. Download ZIP from GitHub
2. Extract files
3. Open `frontend/index.html` in browser
4. Login with: student@ssplp.org / student123

**No installation required!** Everything works in the browser.

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid & Flexbox
- **JavaScript ES6+** - Vanilla JS, no frameworks
- **Font Awesome** - Icons
- **LocalStorage** - Offline data persistence

### Backend (Optional)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Bcrypt** - Password hashing

### Architecture
- **Offline-First** - Works without internet
- **Progressive Web App** - Installable
- **Responsive Design** - Mobile-friendly
- **Role-Based Access Control** - Secure

## 📁 Project Structure

```
CHOL-ANYAR/
├── frontend/
│   ├── index.html                 # Landing page
│   ├── login.html                 # Authentication
│   ├── register.html              # User registration
│   ├── student-dashboard.html     # Student dashboard
│   ├── teacher-dashboard.html     # Teacher dashboard
│   ├── admin-dashboard.html       # Admin dashboard
│   ├── subjects.html              # 15 subjects
│   ├── quizzes.html              # Quiz system
│   ├── progress.html             # Progress tracking
│   ├── profile.html              # User profile
│   ├── content-management.html   # Content upload
│   ├── css/
│   │   └── style.css            # All styling
│   └── js/
│       ├── app.js               # Core functionality
│       ├── subjects.js          # Subject data
│       ├── student-dashboard.js # Student logic
│       ├── teacher-dashboard.js # Teacher logic
│       ├── admin-dashboard.js   # Admin logic
│       ├── content-management.js# Content system
│       ├── quizzes.js          # Quiz system
│       ├── progress.js         # Progress tracking
│       └── profile.js          # Profile management
├── backend/
│   ├── src/
│   │   ├── models/             # MongoDB schemas
│   │   ├── routes/             # API endpoints
│   │   ├── middleware/         # Auth middleware
│   │   └── server.js          # Express server
│   ├── package.json
│   └── .env
├── README.md
├── IMPLEMENTATION_SUMMARY.md
└── SETUP_INSTRUCTIONS.md
```

## 👥 User Roles

### Student
- Browse and access 15 subjects
- Take quizzes and assessments
- Track personal progress
- View performance analytics
- Manage profile

### Teacher
- Upload learning materials
- Create quizzes and assessments
- Monitor student performance
- View class analytics
- Manage content library

### Administrator
- Manage all users
- View platform metrics
- Monitor system performance
- Oversee curriculum
- Generate reports

## 📸 Screenshots

### Landing Page
Beautiful hero section with features and statistics

### Student Dashboard
- Personal progress tracking
- Subject access
- Quick actions
- Recent activity

### Teacher Dashboard
- Class management
- Student analytics
- Content statistics
- Quick actions

### Admin Dashboard
- User management
- Platform metrics
- System monitoring
- User statistics

### Profile Page
- Modern gradient design
- Profile picture upload
- Personal information
- Social media links
- Role-based statistics

## 🌐 Deployment

### Static Hosting (Recommended)

**GitHub Pages**
```bash
# Push to GitHub
git add .
git commit -m "Deploy SSPLP"
git push origin main

# Enable GitHub Pages in repository settings
# Select main branch and /frontend folder
```

**Netlify**
```bash
# Drag and drop frontend folder to Netlify
# Or connect GitHub repository
# Build settings: None (static site)
# Publish directory: frontend
```

**Vercel**
```bash
vercel --prod
# Select frontend directory
```

### Full Stack Deployment

**Heroku (Backend)**
```bash
cd backend
heroku create ssplp-backend
git push heroku main
```

**MongoDB Atlas (Database)**
1. Create account at mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update backend/.env

## 📊 Features Checklist

- ✅ User Authentication (Login/Register)
- ✅ Role-Based Dashboards (Student/Teacher/Admin)
- ✅ 15 Curriculum-Aligned Subjects
- ✅ Quiz Creation & Taking System
- ✅ Progress Tracking & Analytics
- ✅ Content Management System
- ✅ Profile Management
- ✅ Offline-First Architecture
- ✅ Responsive Design
- ✅ Multi-Language Support (EN/AR)
- ✅ LocalStorage Persistence
- ✅ Beautiful Modern UI
- ✅ Mobile Navigation
- ✅ Demo Accounts
- ✅ Data Export

## 🎯 SRS Requirements Compliance

### Functional Requirements
✅ **FR01:** User Authentication & Profile Management  
✅ **FR02:** Curriculum-Aligned Content Delivery (15 subjects)  
✅ **FR03:** Offline Learning Capability (LocalStorage)  
✅ **FR04:** Progress Tracking & Analytics  
✅ **FR05:** Assessment & Feedback System  

### Non-Functional Requirements
✅ **NFR01:** Performance (< 1 second load time)  
✅ **NFR02:** Usability (Intuitive interface)  
✅ **NFR03:** Compatibility (All modern browsers)  
✅ **NFR04:** Reliability (100% client-side availability)  

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Chol Anyar**
- GitHub: [@Jongkuch1](https://github.com/Jongkuch1)
- Repository: [https://github.com/Jongkuch1/ssplp](https://github.com/Jongkuch1/ssplp)
- Email: contact@ssplp.org

## 🙏 Acknowledgments

- South Sudan Ministry of Education
- UNESCO Education Statistics
- Font Awesome for icons
- MongoDB for database
- All contributors and testers

## 📞 Support

For support, email support@ssplp.org or open an issue on GitHub.

---

**Academic Project | Educational Purpose Only**

*University Summative Assignment - Full-Stack Web Development Demonstration*
