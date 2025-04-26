"use client"

import { useState } from "react"
import { Calendar } from "../components/ui/calendar"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"
import { useToast } from "../../hooks/use-toast"

// Sample attendance data
const attendanceData = {
  "2025-04-01": "present",
  "2025-04-02": "present",
  "2025-04-03": "present",
  "2025-04-04": "present",
  "2025-04-05": "weekend",
  "2025-04-06": "weekend",
  "2025-04-07": "present",
  "2025-04-08": "present",
  "2025-04-09": "absent",
  "2025-04-10": "present",
  "2025-04-11": "present",
  "2025-04-12": "weekend",
  "2025-04-13": "weekend",
  "2025-04-14": "present",
  "2025-04-15": "present",
  "2025-04-16": "present",
  "2025-04-17": "present",
  "2025-04-18": "present",
  "2025-04-19": "weekend",
  "2025-04-20": "weekend",
  "2025-04-21": "leave",
  "2025-04-22": "leave",
  "2025-04-23": "leave",
  "2025-04-24": "present",
  "2025-04-25": "present",
}

export function AttendanceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isCheckedIn, setIsCheckedIn] = useState(false)
  const { toast } = useToast()

  const handleCheckIn = () => {
    setIsCheckedIn(true)
    toast({
      title: "Checked In",
      description: "You have successfully checked in for today.",
    })
  }

  const handleCheckOut = () => {
    setIsCheckedIn(false)
    toast({
      title: "Checked Out",
      description: "You have successfully checked out for today.",
    })
  }

  const formatDate = (date: Date | undefined) => {
    if (!date) return ""
    return date.toISOString().split("T")[0]
  }

  const getAttendanceStatus = (date: Date | undefined) => {
    if (!date) return null
    const formattedDate = formatDate(date)
    return attendanceData[formattedDate as keyof typeof attendanceData] || null
  }

  const renderDayContent = (day: Date) => {
    const status = getAttendanceStatus(day)

    if (status === "present") {
      return <div className="h-2 w-2 rounded-full bg-green-500 mx-auto" />
    } else if (status === "absent") {
      return <div className="h-2 w-2 rounded-full bg-red-500 mx-auto" />
    } else if (status === "leave") {
      return <div className="h-2 w-2 rounded-full bg-yellow-500 mx-auto" />
    }
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            components={{
              Day: ({ day }) => (
                <div className="flex flex-col items-center justify-center h-full">
                  <div>{day.date.getDate()}</div>
                  {renderDayContent(day.date)}
                </div>
              ),
            }}
          />
        </div>
        <Card className="flex-1">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h3 className="font-medium">
                {date
                  ? date.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Select a date"}
              </h3>

              {date && date.toDateString() === new Date().toDateString() ? (
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Status:</span>
                      <Badge variant={isCheckedIn ? "default" : "outline"}>
                        {isCheckedIn ? "Checked In" : "Not Checked In"}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Check-in Time:</span>
                      <span className="text-sm">{isCheckedIn ? "09:00 AM" : "-"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Check-out Time:</span>
                      <span className="text-sm">{!isCheckedIn && isCheckedIn ? "05:30 PM" : "-"}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button onClick={handleCheckIn} disabled={isCheckedIn} className="flex-1">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Check In
                    </Button>
                    <Button onClick={handleCheckOut} disabled={!isCheckedIn} variant="outline" className="flex-1">
                      <XCircle className="mr-2 h-4 w-4" />
                      Check Out
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Status:</span>
                    <Badge
                      variant={
                        getAttendanceStatus(date) === "present"
                          ? "default"
                          : getAttendanceStatus(date) === "absent"
                            ? "destructive"
                            : getAttendanceStatus(date) === "leave"
                              ? "outline" // Replace "warning" with a supported value
                              : getAttendanceStatus(date) === "weekend"
                                ? "secondary"
                                : "outline"
                      }
                    >
                      {getAttendanceStatus(date)?.charAt(0).toUpperCase() +
                        (getAttendanceStatus(date)?.slice(1) || "Not Recorded")}
                    </Badge>
                  </div>
                  {getAttendanceStatus(date) === "present" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Check-in Time:</span>
                        <span className="text-sm">09:05 AM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Check-out Time:</span>
                        <span className="text-sm">05:45 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Working Hours:</span>
                        <span className="text-sm">8h 40m</span>
                      </div>
                    </>
                  )}
                  {getAttendanceStatus(date) === "leave" && (
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Leave Type:</span>
                      <span className="text-sm">Annual Leave</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-sm">Present</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span className="text-sm">Absent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="text-sm">Leave</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-gray-300" />
          <span className="text-sm">Weekend</span>
        </div>
      </div>
    </div>
  )
}
