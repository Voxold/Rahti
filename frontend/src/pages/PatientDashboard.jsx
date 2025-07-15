"use client"

import { useState } from "react"

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const upcomingAppointments = [
    {
      id: 1,
      service: "Wound Care",
      therapist: "Dr. Sarah Wilson",
      date: "2024-01-15",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: 2,
      service: "Vital Signs Check",
      therapist: "Nurse John Davis",
      date: "2024-01-17",
      time: "2:00 PM",
      status: "pending",
    },
  ]

  const recentServices = [
    {
      id: 1,
      service: "Post-Surgery Care",
      therapist: "Dr. Michael Chen",
      date: "2024-01-10",
      rating: 5,
      notes: "Excellent care, very professional",
    },
    {
      id: 2,
      service: "Bandage Change",
      therapist: "Nurse Lisa Brown",
      date: "2024-01-08",
      rating: 5,
      notes: "Quick and painless procedure",
    },
  ]

  const healthMetrics = [
    { label: "Blood Pressure", value: "120/80", status: "normal", icon: "💓" },
    { label: "Heart Rate", value: "72 bpm", status: "normal", icon: "🫀" },
    { label: "Temperature", value: "98.6°F", status: "normal", icon: "🌡️" },
    { label: "Recovery Progress", value: "85%", status: "good", icon: "📈" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Patient Dashboard</h1>
          <p className="text-gray-600">Welcome back, Sarah! Here's your health overview.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8 bg-white rounded-2xl p-2 shadow-lg">
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "appointments", label: "Appointments", icon: "📅" },
              { id: "history", label: "History", icon: "📋" },
              { id: "health", label: "Health Metrics", icon: "💚" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{metric.icon}</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          metric.status === "normal" || metric.status === "good"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {metric.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                    <p className="text-2xl font-bold text-emerald-600">{metric.value}</p>
                  </div>
                ))}
              </div>

              {/* Next Appointment */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Appointment</h3>
                {upcomingAppointments[0] && (
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl">
                    <div>
                      <h4 className="font-semibold text-gray-900">{upcomingAppointments[0].service}</h4>
                      <p className="text-gray-600">with {upcomingAppointments[0].therapist}</p>
                      <p className="text-sm text-gray-500">
                        {upcomingAppointments[0].date} at {upcomingAppointments[0].time}
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-200">
                    <span>📅</span>
                    <span>Book New Service</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <span>💬</span>
                    <span>Message Therapist</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 bg-gray-50 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <span>🚨</span>
                    <span>Emergency Contact</span>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-600">✅</span>
                    <div>
                      <p className="text-sm font-medium">Service Completed</p>
                      <p className="text-xs text-gray-500">Wound care - Jan 10</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-600">📅</span>
                    <div>
                      <p className="text-sm font-medium">Appointment Scheduled</p>
                      <p className="text-xs text-gray-500">Vital signs - Jan 17</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === "appointments" && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-900">Upcoming Appointments</h2>
                <button className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                  Book New Service
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{appointment.service}</h3>
                        <p className="text-gray-600">with {appointment.therapist}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            appointment.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <span className="text-xl">⋮</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === "history" && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900">Service History</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentServices.map((service) => (
                  <div key={service.id} className="p-6 border border-gray-200 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.service}</h3>
                        <p className="text-gray-600">by {service.therapist}</p>
                        <p className="text-sm text-gray-500">{service.date}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${i < service.rating ? "text-yellow-400" : "text-gray-300"}`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{service.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Health Metrics Tab */}
        {activeTab === "health" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{metric.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
                    <p className="text-3xl font-bold text-emerald-600 mb-2">{metric.value}</p>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        metric.status === "normal" || metric.status === "good"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {metric.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health Trends</h3>
              <div className="h-64 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">Health trends chart would be displayed here</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PatientDashboard
