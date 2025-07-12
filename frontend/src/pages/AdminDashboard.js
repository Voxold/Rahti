"use client"

import { useState } from "react"

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")

  const systemStats = [
    { label: "Total Users", value: "1,234", change: "+12%", icon: "👥", color: "from-blue-500 to-blue-600" },
    { label: "Active Therapists", value: "89", change: "+5%", icon: "👨‍⚕️", color: "from-emerald-500 to-emerald-600" },
    { label: "Monthly Services", value: "2,456", change: "+18%", icon: "🏥", color: "from-purple-500 to-purple-600" },
    { label: "Revenue", value: "$45,678", change: "+23%", icon: "💰", color: "from-yellow-500 to-yellow-600" },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@email.com",
      role: "Patient",
      status: "Active",
      joinDate: "2024-01-10",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      email: "michael@email.com",
      role: "Therapist",
      status: "Active",
      joinDate: "2024-01-09",
    },
    { id: 3, name: "Lisa Brown", email: "lisa@email.com", role: "Patient", status: "Pending", joinDate: "2024-01-08" },
  ]

  const systemAlerts = [
    { id: 1, type: "warning", message: "Server maintenance scheduled for tonight", time: "2 hours ago" },
    { id: 2, type: "info", message: "New therapist application received", time: "4 hours ago" },
    { id: 3, type: "success", message: "Monthly backup completed successfully", time: "1 day ago" },
  ]

  const serviceRequests = [
    {
      id: 1,
      patient: "Sarah Johnson",
      service: "Wound Care",
      therapist: "Dr. Wilson",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 2,
      patient: "Robert Smith",
      service: "Vital Signs",
      therapist: "Nurse Davis",
      status: "Completed",
      priority: "Medium",
    },
    {
      id: 3,
      patient: "Maria Garcia",
      service: "Physical Therapy",
      therapist: "Dr. Brown",
      status: "Scheduled",
      priority: "Low",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">System overview and management controls</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white text-2xl`}
                >
                  {stat.icon}
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.change}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8 bg-white rounded-2xl p-2 shadow-lg">
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "users", label: "User Management", icon: "👥" },
              { id: "services", label: "Service Requests", icon: "🏥" },
              { id: "analytics", label: "Analytics", icon: "📈" },
              { id: "settings", label: "System Settings", icon: "⚙️" },
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
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                      ✓
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Service completed successfully</p>
                      <p className="text-sm text-gray-500">Sarah Johnson - Wound Care</p>
                    </div>
                    <span className="text-sm text-gray-400">5 min ago</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                      +
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">New therapist registered</p>
                      <p className="text-sm text-gray-500">Dr. Emily Rodriguez</p>
                    </div>
                    <span className="text-sm text-gray-400">1 hour ago</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                      !
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">System maintenance reminder</p>
                      <p className="text-sm text-gray-500">Scheduled for tonight at 2 AM</p>
                    </div>
                    <span className="text-sm text-gray-400">2 hours ago</span>
                  </div>
                </div>
              </div>

              {/* Service Overview */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Overview</h3>
                <div className="h-64 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">Service analytics chart would be displayed here</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Alerts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">System Alerts</h3>
                <div className="space-y-3">
                  {systemAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className={`p-3 rounded-lg ${
                        alert.type === "warning"
                          ? "bg-yellow-50 border border-yellow-200"
                          : alert.type === "info"
                            ? "bg-blue-50 border border-blue-200"
                            : "bg-green-50 border border-green-200"
                      }`}
                    >
                      <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                    <span>👥</span>
                    <span>Add New User</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <span>📊</span>
                    <span>Generate Report</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <span>⚙️</span>
                    <span>System Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-900">User Management</h2>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-200">
                    Add User
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Role</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Join Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4">{user.name}</td>
                        <td className="py-4 px-4 text-gray-600">{user.email}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.role === "Patient"
                                ? "bg-blue-100 text-blue-800"
                                : user.role === "Therapist"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.status === "Active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-gray-600">{user.joinDate}</td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                            <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900">Service Requests</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {serviceRequests.map((request) => (
                  <div
                    key={request.id}
                    className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{request.patient}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              request.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : request.priority === "Medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-green-100 text-green-800"
                            }`}
                          >
                            {request.priority}
                          </span>
                        </div>
                        <p className="text-emerald-600 font-medium">{request.service}</p>
                        <p className="text-gray-600 text-sm">Assigned to: {request.therapist}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            request.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : request.status === "In Progress"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {request.status}
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

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">User Growth</h3>
                <div className="h-64 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">User growth chart would be displayed here</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Distribution</h3>
                <div className="h-64 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                  <p className="text-gray-500">Service distribution chart would be displayed here</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Revenue Analytics</h3>
              <div className="h-80 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">Revenue analytics chart would be displayed here</p>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">System Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">General Settings</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
                      <input
                        type="text"
                        value="RA7TI Healthcare"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
                      <input
                        type="email"
                        value="support@ra7ti.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Maintenance Mode</label>
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray-600">Enable maintenance mode</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout (minutes)</label>
                      <input
                        type="number"
                        value="30"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Password Requirements</label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-sm text-gray-600">Minimum 8 characters</span>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-sm text-gray-600">Require special characters</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
