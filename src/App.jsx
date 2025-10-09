


import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginCard from '../src/pages/Login';
import ForgetPassword from '../src/pages/ForgetPassword';
import EmailVerification from '../src/pages/EmailVerification'
import Signup from '../src/pages/Signup';
import SignupVerified from '../src/pages/SignupVerified';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginCard />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupverified" element={<SignupVerified />} />
      </Routes>
    </Router>
  )
}

export default App
