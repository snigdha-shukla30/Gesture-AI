import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginCard from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import EmailVerification from "./pages/EmailVerification";
import Signup from "./pages/Signup";
import SignupVerified from "./pages/SignupVerified";
import CallPage from "../src/pages/CallPage";
import Profile from './pages/ProfilePage';
import Settings from './pages/Settings';
import Home from "./pages/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicRoute from "./Components/PublicRoute";
import { useAuth } from "./contexts/AuthContext";

// Root route component - redirects based on auth state
function RootRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#04122F]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (user) {
    // If email is not verified, redirect to verification page
    if (!user.email_confirmed_at) {
      return <Navigate to="/emailverification" replace />;
    }
    // If logged in and verified, redirect to callpage
    return <Navigate to="/callpage" replace />;
  }

  // If not logged in, redirect to login
  return <Navigate to="/login" replace />;
}

// Email verification route component - allows unverified users, redirects verified users
function EmailVerificationRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#04122F]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If email is already verified, redirect to callpage
  if (user.email_confirmed_at) {
    return <Navigate to="/callpage" replace />;
  }

  // Allow access if logged in but not verified
  return <EmailVerification />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootRoute />} />
        <Route path="/home" element={<Home />} />
        <Route 
          path="/login" 
          element={
            <PublicRoute>
              <LoginCard />
            </PublicRoute>
          } 
        />
        <Route 
          path="/forgetpassword" 
          element={
            <PublicRoute>
              <ForgetPassword />
            </PublicRoute>
          } 
        />
        <Route 
          path="/emailverification" 
          element={<EmailVerificationRoute />} 
        />
        <Route 
          path="/signup" 
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          } 
        />
        <Route 
          path="/signupverified" 
          element={
            <PublicRoute>
              <SignupVerified />
            </PublicRoute>
          } 
        />
        <Route 
          path="/callpage" 
          element={
            <ProtectedRoute>
              <CallPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/ProfilePage" 
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Settings" 
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
