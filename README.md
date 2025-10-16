# AuthLab React

A modern and complete authentication system with React that includes registration, login, session management and route protection with a beautiful dark glassmorphism design.

## 🚀 Features

### Core Features
- ✅ **Protected Routes**: Protection of sensitive pages with React Router
- ✅ **Auth Context**: User state management with Context API
- ✅ **Form Validation**: Form validation with Yup and Formik
- ✅ **Mock API**: Simulated API with json-server
- ✅ **LocalStorage**: Session persistence after page refresh
- ✅ **Responsive Design**: Responsive design with Tailwind CSS
- ✅ **Dark Glassmorphism UI**: Modern dark theme with glassmorphism effects

### UX Features
- ✅ **Loading States**: Loading state display
- ✅ **Error Handling**: Error management and appropriate message display
- ✅ **Toast Notifications**: Success and error message display
- ✅ **Remember Me**: User remember functionality

## 🛠️ Technologies

- **React 19** - Main library
- **React Router DOM** - Routing management and protected routes
- **Axios** - API communication
- **Formik + Yup** - Form management and validation
- **Tailwind CSS** - UI design with glassmorphism
- **Context API** - State management
- **json-server** - Mock API

## 📁 Project Structure

```
src/
├── api/
│   └── auth.js              # API functions for authentication
├── components/
│   ├── FormInput.jsx        # Input component with validation
│   ├── Loader.jsx           # Loading component
│   ├── Navbar.jsx           # Navigation bar
│   └── Toast.jsx            # Message display component
├── context/
│   └── AuthContext.jsx      # User state management
├── pages/
│   ├── Home.jsx             # Home page
│   ├── Login.jsx            # Login page
│   ├── Register.jsx         # Registration page
│   └── Dashboard.jsx        # User dashboard
├── routes/
│   └── ProtectedRoute.jsx   # Route protection
├── App.jsx                  # Main component
└── main.jsx                 # Application entry point
```

## 🚀 Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation and Setup

1. **Clone the project**
```bash
git clone <repository-url>
cd authlab-react
```

2. **Install dependencies**
```bash
npm install
```

3. **Start Mock API**
```bash
npm run api
```

4. **Start React application**
```bash
npm run dev
```

5. **Access the application**
- React App: http://localhost:5173
- Mock API: http://localhost:3001

## 📱 Application Pages

### 🏠 Home Page
- Welcome and project introduction
- Login and registration links
- Project features display

### 🔐 Login Page
- Login form with email and password
- Validation with Yup
- "Remember me" functionality
- Error handling

### 📝 Registration Page
- Registration form with complete fields
- Password confirmation
- Advanced validation
- Auto-login after registration

### 🎛️ Dashboard
- Protected page
- User information display
- Quick actions
- Logout button

## 🔧 API Endpoints

### Mock API (json-server)

#### Get users list
```http
GET http://localhost:3001/users
```

#### Register new user
```http
POST http://localhost:3001/users
Content-Type: application/json

{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}
```

## 🎯 User Flow

1. **Enter home page** → Choose Login or Register
2. **Registration** → Fill form → Confirm → Auto-login to Dashboard
3. **Login** → Fill form → Confirm → Enter Dashboard
4. **Dashboard** → View information → Logout

## 🔒 Security

- Protection of sensitive routes
- Form validation
- Session management with LocalStorage
- API error handling

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Gradients**: Beautiful gradient backgrounds
- **Transparency**: Semi-transparent elements
- **Modern UI**: Clean and contemporary design

## 🚀 Future Development

- [ ] Connect to real Backend (Laravel/Node.js)
- [ ] Password change functionality
- [ ] Forgot password
- [ ] Two-factor authentication
- [ ] Advanced user profile
- [ ] Role and permission system

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build production build
npm run preview  # Preview production build
npm run api      # Start Mock API
npm run lint     # Check code with ESLint
```

## 🤝 Contributing

To contribute to this project:

1. Fork it
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## 📄 License

This project is published under the MIT license.

## 👨‍💻 Developer

This project has been developed as a complete example of an authentication system with React and modern UI design.

---

**Note**: This project is designed for educational and practice purposes. For production use, be sure to add more security and validation features.

## 🌟 Demo Users

You can test the application with these demo users:

1. **Test User**
   - Email: `test@example.com`
   - Password: `123456`

2. **Dev Amir**
   - Email: `devamir99@example.com`
   - Password: `123456`