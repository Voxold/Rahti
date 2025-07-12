"use client"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import PatientDashboard from "./pages/PatientDashboard"
import TherapistDashboard from "./pages/TherapistDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import { AuthProvider, useAuth } from "./context/AuthContext"
import "./App.css"

function AppContent() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={user ? <Navigate to={`/${user.role}-dashboard`} /> : <LoginPage />} />
          <Route
            path="/patient-dashboard"
            element={user && user.role === "patient" ? <PatientDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/therapist-dashboard"
            element={user && user.role === "therapist" ? <TherapistDashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin-dashboard"
            element={user && user.role === "admin" ? <AdminDashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App
