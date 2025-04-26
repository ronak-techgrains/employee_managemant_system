import { DashboardHeader } from "../components/dashboard-header"
import { DashboardStats } from "../components/dashboard-stats"
import { UpcomingLeaves } from "../components/upcoming-leaves"
import { RecentActivity } from "../components/recent-activity"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardStats />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UpcomingLeaves />
        <RecentActivity />
      </div>
    </div>
  )
}
