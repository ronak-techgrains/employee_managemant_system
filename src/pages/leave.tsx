"use client"

import { useState } from "react"
import { LeaveCalendar } from "../components/leave-calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { LeaveHistory } from "../components/leave-history"
import { Button } from "../components/ui/button"
import { Plus } from "lucide-react"
import { ApplyLeaveDialog } from "../components/dialogs/apply-leave-dialog"

export default function LeavePage() {
  const [isApplyLeaveDialogOpen, setIsApplyLeaveDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Leave Management</h1>
        <Button onClick={() => setIsApplyLeaveDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Apply for Leave
        </Button>
      </div>
      <Tabs defaultValue="calendar">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="history">Leave History</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Leave Calendar</CardTitle>
              <CardDescription>View all employee leave status</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaveCalendar />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Leave History</CardTitle>
              <CardDescription>View your leave application history</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaveHistory />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <ApplyLeaveDialog open={isApplyLeaveDialogOpen} onOpenChange={setIsApplyLeaveDialogOpen} />
    </div>
  )
}
