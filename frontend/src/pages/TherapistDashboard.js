"use client"

import { useState } from "react"

const TherapistDashboard = () => {
  const [activeTab, setActiveTab] = useState("schedule")

  const todayAppointments = [
    {
      id: 1,
      patient: "Sarah Johnson",
      service: "Wound Care",
      time: "10:00 AM",
      address: "123 Oak Street, City",
      status: "confirmed",
      notes: "Post-surgery wound care, day 5",
    },
    {
      id: 2,
      patient: "Robert Smith",
      service: "Vital Signs Check",
      time: "2:00 PM",
      address: "456 Pine Avenue, City",
      status: "in-progress",
      notes: "Regular BP and heart rate monitoring",
    },
    {
      id: 3,
      patient: "Maria Garcia",
      service: "Physical Therapy",
      time: "4:30 PM",
      address: "789 Elm Drive, City",
      status: "pending",
      notes: "Knee rehabilitation exercises",
    },
  ]

  const patientList = [
    {
      id: 1,
      name: "Sarah Johnson",
      condition: "Post-Surgery Recovery",
      lastVisit: "2024-01-10",
      nextVisit: "2024-01-15",
      priority: "high",
    },
    {
      id: 2,
      name: "Robert Smith",
      condition: "Hypertension Monitoring",
      lastVisit: "2024-01-12",
      nextVisit: "2024-01-17",
      priority: "medium",
    },
    {
      id: 3,
      name: "Maria Garcia",
      condition: "Physical Rehabilitation",
      lastVisit: "2024-01-11",
      nextVisit: "2024-01-16",
      priority: "low",
    },
  ]

  const stats = [
    { label: "Today's Appointments", value: "3", icon: "📅", color: "from-blue-500 to-blue-600" },
    { label: "Active Patients", value: "12", icon: "👥", color: "from-emerald-500 to-emerald-600" },
    { label: "Completed This Week", value: "18", icon: "✅", color: "from-purple-500 to-purple-600" },
    { label: "Average Rating", value: "4.9", icon: "⭐", color: "from-yellow-500 to-yellow-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Therapist Dashboard</h1>
          <p className="text-gray-600">Welcome back, Dr. Michael Chen! Here's your schedule for today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white text-2xl`}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8 bg-white rounded-2xl p-2 shadow-lg">
            {[
              { id: "schedule", label: "Today's Schedule", icon: "📅" },
              { id: "patients", label: "My Patients", icon: "👥" },
              { id: "reports", label: "Reports", icon: "📊" },
              { id: "profile", label: "Profile", icon: "👨‍⚕️" },
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

        {/* Schedule Tab */}
        {activeTab === "schedule" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-900">Today's Appointments</h2>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                      Add Appointment
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                      View Calendar
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {todayAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{appointment.patient}</h3>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                appointment.status === "confirmed"
                                  ? "bg-green-100 text-green-800"
                                  : appointment.status === "in-progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {appointment.status}
                            </span>
                          </div>
                          <p className="text-emerald-600 font-medium">{appointment.service}</p>
                          <p className="text-gray-600 text-sm">
                            {appointment.time} • {appointment.address}
                          </p>
                          <p className="text-gray-500 text-sm mt-2">{appointment.notes}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200 text-sm">
                            Start Visit
                          </button>
                          <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Patients Tab */}
        {activeTab === "patients" && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-900">My Patients</h2>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Search patients..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                    Add Patient
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {patientList.map((patient) => (
                  <div
                    key={patient.id}
                    className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              patient.priority === "high"
                                ? "bg-red-100 text-red-800"
                                : patient.priority === "medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {patient.priority} priority
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{patient.condition}</p>
                        <div className="flex space-x-4 text-sm text-gray-500">
                          <span>Last visit: {patient.lastVisit}</span>
                          <span>Next visit: {patient.nextVisit}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm">
                          View History
                        </button>
                        <button className="px-3 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200 text-sm">
                          Schedule Visit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Weekly Performance</h3>
                <div className="h-48 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">Performance chart would be displayed here</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Satisfaction</h3>
                <div className="h-48 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">Satisfaction chart would be displayed here</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Reports</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Weekly Summary Report</h4>
                    <p className="text-sm text-gray-500">Generated on Jan 14, 2024</p>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">Download</button>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Patient Care Report</h4>
                    <p className="text-sm text-gray-500">Generated on Jan 12, 2024</p>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">Download</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  MC
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Dr. Michael Chen</h2>
                  <p className="text-gray-600">Certified Healthcare Professional</p>
                  <p className="text-sm text-gray-500">Member since 2020</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">License Number</label>
                      <p className="text-gray-900">HC-2024-001234</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Specializations</label>
                      <p className="text-gray-900">Post-Surgery Care, Wound Management, Vital Signs</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Experience</label>
                      <p className="text-gray-900">8 years</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <p className="text-gray-900">therapist@ra7ti.com</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <p className="text-gray-900">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Service Area</label>
                      <p className="text-gray-900">Downtown, Midtown, Suburbs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TherapistDashboard
