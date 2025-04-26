import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { Badge } from "../components/ui/badge"

const leaveHistory = [
  {
    id: 1,
    type: "Annual Leave",
    startDate: "Apr 21, 2025",
    endDate: "Apr 23, 2025",
    days: 3,
    reason: "Family vacation",
    status: "Approved",
    approvedBy: "Sarah Parker",
  },
  {
    id: 2,
    type: "Sick Leave",
    startDate: "Mar 15, 2025",
    endDate: "Mar 15, 2025",
    days: 1,
    reason: "Doctor's appointment",
    status: "Approved",
    approvedBy: "Sarah Parker",
  },
  {
    id: 3,
    type: "Personal Leave",
    startDate: "Feb 10, 2025",
    endDate: "Feb 11, 2025",
    days: 2,
    reason: "Personal matters",
    status: "Approved",
    approvedBy: "Sarah Parker",
  },
  {
    id: 4,
    type: "Unpaid Leave",
    startDate: "Jan 5, 2025",
    endDate: "Jan 7, 2025",
    days: 3,
    reason: "Family emergency",
    status: "Approved",
    approvedBy: "Sarah Parker",
  },
  {
    id: 5,
    type: "Annual Leave",
    startDate: "May 15, 2025",
    endDate: "May 20, 2025",
    days: 6,
    reason: "Summer vacation",
    status: "Pending",
    approvedBy: "-",
  },
]

export function LeaveHistory() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Period</TableHead>
              <TableHead>Days</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Approved By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaveHistory.map((leave) => (
              <TableRow key={leave.id}>
                <TableCell>{leave.type}</TableCell>
                <TableCell>
                  {leave.startDate} {leave.endDate !== leave.startDate && `- ${leave.endDate}`}
                </TableCell>
                <TableCell>{leave.days}</TableCell>
                <TableCell>{leave.reason}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      leave.status === "Approved" ? "default" : leave.status === "Pending" ? "outline" : "secondary"
                    }
                  >
                    {leave.status}
                  </Badge>
                </TableCell>
                <TableCell>{leave.approvedBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
