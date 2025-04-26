"use client"

import React from "react"
import { Link, useLocation } from "react-router-dom"
import { Calendar, ClipboardList, Home, LogOut, Settings, User, Users } from "lucide-react"
import { cn } from "../utils/tilwind_utils";
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useAuth } from "../contexts/auth-context"
import { ConfirmLogoutDialog } from "./dialogs/confirm-logout-dialog"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Attendance",
    href: "/dashboard/attendance",
    icon: Calendar,
  },
  {
    title: "Leave",
    href: "/dashboard/leave",
    icon: ClipboardList,
  },
  {
    title: "Employees",
    href: "/dashboard/employees",
    icon: Users,
  },
  {
    title: "My Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const location = useLocation()
  const { user } = useAuth()
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = React.useState(false)

  return (
    <div className="flex h-screen flex-col border-r bg-muted/40">
      <div className="flex h-14 items-center border-b px-4">
        <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
          <Users className="h-6 w-6" />
          <span>EMS</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={index}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  location.pathname === item.href && "bg-muted text-primary",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className="flex items-center gap-2 rounded-lg border bg-background p-4">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user?.avatar || "/assets/avatars/avatar.png"} alt="Avatar" />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name || "User"}</p>
            <p className="text-xs leading-none text-muted-foreground">{user?.role || "Employee"}</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto h-8 w-8" onClick={() => setIsLogoutDialogOpen(true)}>
            <LogOut className="h-4 w-4" />
            <span className="sr-only">Log out</span>
          </Button>
        </div>
      </div>

      <ConfirmLogoutDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen} />
    </div>
  )
}
