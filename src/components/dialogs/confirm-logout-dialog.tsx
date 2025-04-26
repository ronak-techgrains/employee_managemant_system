"use client"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import { useAuth } from "../../contexts/auth-context"
import { useToast } from "../../../hooks/use-toast"

interface ConfirmLogoutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConfirmLogoutDialog({ open, onOpenChange }: ConfirmLogoutDialogProps) {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleLogout = () => {
    logout()
    onOpenChange(false)
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    })
    navigate("/login")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Logout</DialogTitle>
          <DialogDescription>Are you sure you want to log out? Any unsaved changes will be lost.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
