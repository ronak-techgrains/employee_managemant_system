"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { EmployeeList } from "../components/employee-list"
import { Button } from "../components/ui/button"
import { PlusCircle } from "lucide-react"
import { DeleteEmployeeDialog } from "../components/dialogs/delete-employee-dialog"

export default function EmployeesPage() {
  const navigate = useNavigate()
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<{ id: string; name: string } | null>(null)

  const handleDeleteClick = (id: string, name: string) => {
    setSelectedEmployee({ id, name })
    setIsDeleteDialogOpen(true)
  }

  const handleDeleteConfirm = () => {
    // This would be handled by the dialog component
    console.log("Employee deleted")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
        <Button onClick={() => navigate("/dashboard/employees/new")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>
      <EmployeeList onDeleteClick={handleDeleteClick} />

      {selectedEmployee && (
        <DeleteEmployeeDialog
          open={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          employeeId={selectedEmployee.id}
          employeeName={selectedEmployee.name}
          onDelete={handleDeleteConfirm}
        />
      )}
    </div>
  )
}
