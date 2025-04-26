import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"

const upcomingLeaves = [
  {
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AJ",
    type: "Annual Leave",
    dates: "Apr 26 - Apr 30",
    status: "Approved",
  },
  {
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "BS",
    type: "Sick Leave",
    dates: "Apr 27",
    status: "Approved",
  },
  {
    name: "Carol Williams",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "CW",
    type: "Personal Leave",
    dates: "May 2 - May 3",
    status: "Pending",
  },
]

export function UpcomingLeaves() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Leaves</CardTitle>
        <CardDescription>Employee leave schedule for the next 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingLeaves.map((leave, i) => (
            <div key={i} className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={leave.avatar || "/placeholder.svg"} alt={leave.name} />
                <AvatarFallback>{leave.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{leave.name}</p>
                <p className="text-sm text-muted-foreground">{leave.type}</p>
                <p className="text-xs text-muted-foreground">{leave.dates}</p>
              </div>
              <Badge variant={leave.status === "Approved" ? "default" : "outline"}>{leave.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
