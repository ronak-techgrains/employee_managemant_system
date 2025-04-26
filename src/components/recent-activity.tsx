import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

const activities = [
  {
    user: "John Doe",
    action: "approved leave request for",
    target: "Alice Johnson",
    time: "2 hours ago",
  },
  {
    user: "Sarah Parker",
    action: "updated profile information",
    target: "",
    time: "3 hours ago",
  },
  {
    user: "Admin",
    action: "added new employee",
    target: "David Wilson",
    time: "Yesterday",
  },
  {
    user: "Bob Smith",
    action: "submitted leave request",
    target: "",
    time: "Yesterday",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest actions in the system</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="relative mt-1 h-2 w-2 rounded-full bg-primary" />
              <div className="flex-1 space-y-1">
                <p className="text-sm leading-none">
                  <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                  {activity.target && <span className="font-medium">{activity.target}</span>}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
