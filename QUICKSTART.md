# 🚀 Portfolio Generator - Quick Start Guide

## Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```
All dependencies are already configured in `package.json`. This installs:
- Express (web server)
- MongoDB Mongoose (database)
- CORS & Body-Parser (request handling)
- Dotenv (environment variables)

### 2️⃣ Configure Database
Edit `.env` file:
```
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

**Need MongoDB?**
- **Local**: [Download MongoDB Community](https://www.mongodb.com/try/download/community)
- **Cloud**: [MongoDB Atlas (Free)](https://www.mongodb.com/cloud/atlas) - recommended for easy setup

### 3️⃣ Start the Application
```bash
npm start
```

✅ Server running on `http://localhost:5000`

---

## 📋 Quick Features

| Feature | Status |
|---------|--------|
| Home Page | ✅ Ready |
| Portfolio Form | ✅ Ready |
| API Endpoints | ✅ Ready |
| 3 Templates | ✅ Ready |
| Template Regeneration | ✅ Ready |
| Database Storage | ✅ Ready |
| Responsive Design | ✅ Ready |

---

## 🎨 What's Included

### Templates
1. **Template 1**: Modern Blue - Professional and clean
2. **Template 2**: Gradient Purple - Vibrant and modern
3. **Template 3**: Dark Red - Bold and artistic

### User Data Stored
- Name
- Role/Title
- Email
- Phone
- Bio
- Projects list

---

## 📱 Using the Application

1. **Open Home Page** → http://localhost:5000
2. **Click "Create" Button** → Navigate to form
3. **Fill Your Details** → All fields required
4. **Generate Portfolio** → Auto-saved to database
5. **Regenerate** → Click button to get different template

---

## 🔌 API Endpoints

### Generate Portfolio
```
POST /api/generate
Content-Type: application/json

{
  "name": "Your Name",
  "role": "Your Role",
  "phno": "1234567890",
  "email": "you@example.com",
  "photo": "avatar",
  "bio": "Your bio",
  "projects": ["Project 1", "Project 2"]
}
```

### Regenerate with Different Template
```
GET /api/regenerate/{userId}
```

### Health Check
```
GET /api/health
```

---

## 🛠️ Project Files

- `Server.js` - Main server configuration
- `Route.js` - API endpoints
- `database.js` - MongoDB connection
- `model/User.js` - User data schema
- `form.html` - Portfolio form UI
- `index.html` - Home page
- `templates/` - 3 portfolio templates
- `.env` - Configuration (sensitive data)
- `package.json` - Dependencies

---

## ✅ Verification Checklist

After starting the server, verify:

- [ ] `http://localhost:5000` loads home page
- [ ] "Create" button navigates to form
- [ ] Form has all input fields
- [ ] Server console shows no errors
- [ ] MongoDB connection successful (check console)
- [ ] Can fill form and submit
- [ ] Portfolio generates without errors

---

## 🆘 Common Issues & Solutions

### Issue: "MongoDB Connection Failed"
**Solution**: 
- Start MongoDB: `mongod` (local) or verify Atlas connection string in `.env`

### Issue: "Port 5000 already in use"
**Solution**: 
- Change PORT in `.env` to 5001, 5002, etc.
- Or: `npx kill-port 5000`

### Issue: "Module not found"
**Solution**: 
- Run `npm install` again
- Delete `node_modules` and reinstall

### Issue: Form not submitting
**Solution**: 
- Check browser console (F12 → Console)
- Ensure server is running
- Check API URL matches

---

## 📚 Learn More

- [Express.js Docs](https://expressjs.com/)
- [MongoDB Mongoose](https://mongoosejs.com/)
- [REST API Best Practices](https://restfulapi.net/)

---

## 🎯 Next Steps

After setup, you can:
1. Add more templates
2. Implement user authentication
3. Add image upload
4. Export portfolio as PDF
5. Deploy to production

---

**You're all set! Create your first portfolio now! 🎉**

Questions? Check README.md for detailed documentation.
