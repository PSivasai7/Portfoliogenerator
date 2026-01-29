# Portfolio Generator - End-to-End Project

A full-stack web application that allows users to create professional portfolios with multiple design templates. Users can fill in their information and generate a personalized portfolio that can be regenerated with different templates.

## Project Features

✅ **User-Friendly Form**: Beautiful, responsive form for collecting portfolio information
✅ **Multiple Templates**: 3 professional portfolio templates with different designs
✅ **Database Storage**: MongoDB integration to store user portfolio data
✅ **Template Regeneration**: Generate new portfolios with different templates using stored data
✅ **Responsive Design**: All templates are mobile-friendly
✅ **REST API**: Backend API for portfolio generation and regeneration
✅ **Professional UI**: Modern, gradient-based design with smooth interactions

## Tech Stack

### Frontend
- HTML5
- CSS3 (Flexbox, Grid, Gradients, Animations)
- JavaScript (Vanilla JS, Async/Await)
- Responsive Design

### Backend
- Node.js
- Express.js (Web framework)
- MongoDB (Database)
- Mongoose (ODM)
- CORS (Cross-Origin Resource Sharing)
- Body-Parser (Request parsing)
- Dotenv (Environment variables)

## Project Structure

```
mynewport/
├── index.html              # Home page with landing content
├── form.html               # Portfolio creation form
├── Server.js               # Express server configuration
├── Route.js                # API routes (generate & regenerate)
├── database.js             # MongoDB connection
├── package.json            # Dependencies and scripts
├── .env                    # Environment variables
├── css/
│   └── index.css          # Styling for home page
├── imgs/                   # Image assets
├── model/
│   └── User.js            # MongoDB User schema
└── templates/
    ├── template1.html      # Modern Blue Template
    ├── template2.html      # Gradient Purple Template
    └── template3.html      # Dark Red Template
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Step 1: Clone or Setup Project
```bash
cd mynewport
```

### Step 2: Install Dependencies
```bash
npm install
```

Dependencies include:
- express: Web framework
- cors: Cross-origin requests
- body-parser: Parse request bodies
- mongoose: MongoDB ODM
- dotenv: Environment variables
- ejs: Template engine

### Step 3: Configure Environment Variables
Edit `.env` file and set:
```
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

For MongoDB Atlas (cloud):
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
PORT=5000
```

### Step 4: Start MongoDB
If using local MongoDB:
```bash
mongod
```

### Step 5: Run the Server
```bash
npm start
```

The server will start on `http://localhost:5000`

## Usage

### 1. **Access the Home Page**
   - Navigate to `http://localhost:5000/`
   - Click "Create" button to start creating a portfolio

### 2. **Fill Portfolio Form**
   - Name
   - Role/Title
   - Phone Number
   - Email Address
   - Bio/About
   - Projects (comma-separated)
   - Click "Generate Portfolio"

### 3. **View Generated Portfolio**
   - Your portfolio will be generated with a random template
   - Click "🔄 Regenerate Template" button to get a different template design
   - Your data is saved automatically

### 4. **Regenerate Anytime**
   - Previous portfolios can be regenerated with different templates
   - All user data is preserved in the database

## API Endpoints

### 1. Generate Portfolio
**Endpoint**: `POST /api/generate`

**Request Body**:
```json
{
    "name": "John Doe",
    "role": "Full Stack Developer",
    "phno": "1234567890",
    "email": "john@example.com",
    "photo": "avatar",
    "bio": "Passionate developer with 5 years of experience...",
    "projects": ["Project 1", "Project 2", "Project 3"]
}
```

**Response**: HTML portfolio page + User ID in header

### 2. Regenerate Portfolio
**Endpoint**: `GET /api/regenerate/:userId`

**Response**: New portfolio with different template

### 3. Health Check
**Endpoint**: `GET /api/health`

**Response**: 
```json
{
    "status": "API is running..."
}
```

## Portfolio Templates

### Template 1 - Modern Blue
- Modern gradient background (#061045 to #0a1f4a)
- Clean layout with circular profile image
- Professional typography
- Grid-based project display

### Template 2 - Gradient Purple
- Purple gradient background (#667eea to #764ba2)
- Sticky header with navigation
- Hero section with image on right
- Glassmorphism effects on project cards

### Template 3 - Dark Red
- Dark theme (#1a1a2e)
- Red accent color (#e94560)
- Modern card-based design
- Call-to-action button
- Smooth hover animations

## Database Schema

### User Model
```javascript
{
    name: String,
    role: String,
    phno: Number,
    bio: String,
    email: String,
    photo: String,
    projects: [String],
    createdAt: Date (auto-generated)
}
```

## Features Implemented

✅ Responsive form with validation
✅ MongoDB integration with Mongoose
✅ Three unique portfolio templates
✅ Template regeneration functionality
✅ User data persistence
✅ REST API endpoints
✅ CORS support for cross-origin requests
✅ Static file serving
✅ Environment configuration
✅ Error handling
✅ Loading states
✅ Mobile-responsive design

## Future Enhancements

- [ ] Add more portfolio templates
- [ ] Image upload functionality with file storage
- [ ] Email verification
- [ ] User authentication and login
- [ ] Portfolio preview before saving
- [ ] Export portfolio as PDF
- [ ] Theme customization options
- [ ] Social media link integration
- [ ] Analytics dashboard
- [ ] Portfolio sharing via URL

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGO_URI in .env file
- Verify database credentials for cloud databases

### Port Already in Use
- Change PORT in .env to a different port (e.g., 5001)
- Or kill the process using the port

### CORS Errors
- Ensure CORS is properly configured in Server.js
- Frontend and backend should communicate on localhost for development

### Form Not Submitting
- Open browser console (F12) to check errors
- Ensure server is running on the configured port
- Check network tab in developer tools

## Running on Different Environments

### Development
```bash
npm start
```

### Production
1. Set NODE_ENV=production
2. Use a MongoDB cloud service (Atlas)
3. Deploy to platforms like Heroku, Vercel, or AWS

## Files Modified/Created

### Modified Files:
- ✏️ `.env` - Updated MongoDB URI and PORT
- ✏️ `Server.js` - Added static file serving and health check
- ✏️ `Route.js` - Fixed regenerate endpoint with proper user data
- ✏️ `form.html` - Complete redesign with modern UI/UX
- ✏️ `templates/template1.html` - Professional modern template
- ✏️ `templates/template2.html` - Gradient purple template
- ✏️ `templates/template3.html` - Dark red template

## Project Statistics

- **Lines of Code**: ~2000+
- **CSS Styling**: Comprehensive responsive design
- **JavaScript**: Modern ES6+ with async/await
- **Database**: MongoDB with Mongoose ODM
- **API Routes**: 3 endpoints
- **Portfolio Templates**: 3 unique designs

## Author

Portfolio Generator v1.0

## License

ISC

## Support

For issues or questions, check the troubleshooting section or review the code comments.

---

**Project Status**: ✅ Complete and Ready for Use

Happy Portfolio Creating! 🎉
