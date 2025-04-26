import { AttendanceCalendar } from "../components/attendance-calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Attendance Calendar</CardTitle>
          <CardDescription>View and manage your attendance records</CardDescription>
        </CardHeader>
        <CardContent>
          <AttendanceCalendar />
        </CardContent>
      </Card>
    </div>
  )
}
