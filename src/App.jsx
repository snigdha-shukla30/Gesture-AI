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



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupverified" element={<SignupVerified />} />
        <Route path="/callpage" element={<CallPage />} />
        <Route path="/ProfilePage" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;
