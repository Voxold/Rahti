"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Mock users database
  const mockUsers = {
    "patient@ra7ti.com": {
      email: "patient@ra7ti.com",
      password: "patient123",
      role: "patient",
      name: "Sarah Johnson",
      id: 1,
    },
    "therapist@ra7ti.com": {
      email: "therapist@ra7ti.com",
      password: "therapist123",
      role: "therapist",
      name: "Dr. Michael Chen",
      id: 2,
    },
    "admin@ra7ti.com": {
      email: "admin@ra7ti.com",
      password: "admin123",
      role: "admin",
      name: "Admin User",
      id: 3,
    },
  }

  useEffect(() => {
    const savedUser = localStorage.getItem("ra7ti_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const foundUser = mockUsers[email]
    if (foundUser && foundUser.password === password) {
      const userInfo = { ...foundUser }
      delete userInfo.password
      setUser(userInfo)
      localStorage.setItem("ra7ti_user", JSON.stringify(userInfo))
      return { success: true }
    }
    return { success: false, error: "Invalid credentials" }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("ra7ti_user")
  }

  const value = {
    user,
    login,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
