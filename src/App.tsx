import { Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./contexts/auth-context"
import { ProtectedRoute } from "./components/protected-route"
import LoginPage from "./pages/login"
import ForgotPasswordPage from "./pages/forgot-password"
import ResetPasswordPage from "./pages/reset-password"
import DashboardLayout from "./layouts/dashboard-layout"
import DashboardPage from "./pages/dashboard"
import AttendancePage from "./pages/attendance"
import LeavePage from "./pages/leave"
import EmployeesPage from "./pages/employees"
// import NewEmployeePage from "./pages/new-employee"
// import EmployeeDetailPage from "./pages/employee-detail"
import ProfilePage from "./pages/profile"
// import SettingsPage from "./pages/settings"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="leave" element={<LeavePage />} />
          <Route path="employees" element={<EmployeesPage />} />
          {/* <Route path="employees/new" element={<NewEmployeePage />} />
          <Route path="employees/:id" element={<EmployeeDetailPage />} /> */}
          <Route path="profile" element={<ProfilePage />} />
          {/* <Route path="settings" element={<SettingsPage />} /> */}
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
