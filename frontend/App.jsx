import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import LandingPage from "./src/pages/LandingPage";
import LoginPage from "./src/pages/LoginPage";
import PatientDashboard from "./src/pages/PatientDashboard";
import TherapistDashboard from "./src/pages/TherapistDashboard";
import AdminDashboard from "./src/pages/AdminDashboard";
import ServicesPage from "./src/pages/ServicesPage";
import AboutPage from "./src/pages/AboutPage";
import ContactPage from "./src/pages/ContactPage";
import { AuthProvider, useAuth } from "./src/context/AuthContext";
import "./App.css";

function AppContent() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/login"
            element={
              user ? <Navigate to={`/${user.role}-dashboard`} /> : <LoginPage />
            }
          />
          <Route
            path="/patient-dashboard"
            element={
              user && user.role === "patient" ? (
                <PatientDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/therapist-dashboard"
            element={
              user && user.role === "therapist" ? (
                <TherapistDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              user && user.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
