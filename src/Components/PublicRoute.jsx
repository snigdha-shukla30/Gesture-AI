import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#04122F]">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // If user is logged in, redirect to home/callpage
  if (user) {
    // If email is not verified, redirect to verification page
    if (!user.email_confirmed_at) {
      return <Navigate to="/emailverification" replace />;
    }
    // If email is verified, redirect to callpage
    return <Navigate to="/callpage" replace />;
  }

  return children;
}

