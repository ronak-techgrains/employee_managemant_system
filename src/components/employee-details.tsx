import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Edit, Mail, Phone, User } from "lucide-react"
import { Link } from "react-router-dom";

export function EmployeeDetails({ employee }: { employee: any }) {
  // This would normally come from a database
  const employee_data = {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg?height=128&width=128",
    initials: "JD",
    department: "Engineering",
    position: "Senior Developer",
    status: "Active",
    joinDate: "January 15, 2023",
    endDate: "",
    salary: "$85,000",
    manager: "Sarah Parker",
    address: "123 Main St, Anytown, CA 12345",
    emergencyContact: "Jane Doe (Wife) - +1 (555) 987-6543",
    skills: ["JavaScript", "React", "TypeScript", "Node.js", "Next.js"],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        year: "2018",
      },
    ],
    documents: [
      {
        name: "Employment Contract",
        date: "Jan 10, 2023",
      },
      {
        name: "NDA Agreement",
        date: "Jan 10, 2023",
      },
      {
        name: "Tax Forms",
        date: "Jan 12, 2023",
      },
    ],
    attendance: {
      present: 85,
      absent: 5,
      leave: 10,
    },
    leaveBalance: {
      annual: 15,
      sick: 10,
      personal: 3,
    },
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:w-1/3">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-32 w-32">
                <AvatarImage
                  src={employee_data.avatar || "/placeholder.svg"}
                  alt={`${employee_data.firstName} ${employee_data.lastName}`}
                />
                <AvatarFallback>{employee_data.initials}</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-xl font-bold">
                {employee_data.firstName} {employee_data.lastName}
              </h2>
              <p className="text-muted-foreground">{employee_data.position}</p>
              <Badge className="mt-2">{employee_data.status}</Badge>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Department</h3>
                <p>{employee_data.department}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p>{employee_data.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                <p>{employee_data.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Join Date</h3>
                <p>{employee_data.joinDate}</p>
              </div>
              {employee_data.endDate && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">End Date</h3>
                  <p>{employee_data.endDate}</p>
                </div>
              )}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Manager</h3>
                <p>{employee_data.manager}</p>
              </div>
            </div>

            <div className="mt-6">
              <Button asChild className="w-full">
                <Link to={`/dashboard/employees/${employee_data.id}/edit`}>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="employment">Employment</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-6 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Full Name</h4>
                      <p>
                        {employee_data.firstName} {employee_data.lastName}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                      <p>{employee_data.email}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                      <p>{employee_data.phone}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Address</h4>
                      <p>{employee_data.address}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Emergency Contact</h4>
                      <p>{employee_data.emergencyContact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium">Skills</h3>
                  <Separator className="my-4" />
                  <div className="flex flex-wrap gap-2">
                    {employee_data.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium">Education</h3>
                  <Separator className="my-4" />
                  <div className="space-y-4">
                    {employee_data.education.map((edu, index) => (
                      <div key={index}>
                        <h4 className="font-medium">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">
                          {edu.institution}, {edu.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="employment" className="mt-6 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium">Employment Details</h3>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Department</h4>
                      <p>{employee_data.department}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Position</h4>
                      <p>{employee_data.position}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Status</h4>
                      <Badge>{employee_data.status}</Badge>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Manager</h4>
                      <p>{employee_data.manager}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Join Date</h4>
                      <p>{employee_data.joinDate}</p>
                    </div>
                    {employee_data.endDate && (
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">End Date</h4>
                        <p>{employee_data.endDate}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Salary</h4>
                      <p>{employee_data.salary}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="attendance" className="mt-6 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium">Attendance Overview</h3>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg border p-4 text-center">
                      <h4 className="text-sm font-medium text-muted-foreground">Present</h4>
                      <p className="text-2xl font-bold">{employee_data.attendance.present}%</p>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <h4 className="text-sm font-medium text-muted-foreground">Absent</h4>
                      <p className="text-2xl font-bold">{employee_data.attendance.absent}%</p>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <h4 className="text-sm font-medium text-muted-foreground">On Leave</h4>
                      <p className="text-2xl font-bold">{employee_data.attendance.leave}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium">Leave Balance</h3>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg border p-4 text-center">
                      <h4 className="text-sm font-medium text-muted-foreground">Annual Leave</h4>
                      <p className="text-2xl font-bold">{employee_data.leaveBalance.annual}</p>
                      <p className="text-xs text-muted-foreground">days remaining</p>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <h4 className="text-sm font-medium text-muted-foreground">Sick Leave</h4>
                      <p className="text-2xl font-bold">{employee_data.leaveBalance.sick}</p>
                      <p className="text-xs text-muted-foreground">days remaining</p>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <h4 className="text-sm font-medium text-muted-foreground">Personal Leave</h4>
                      <p className="text-2xl font-bold">{employee_data.leaveBalance.personal}</p>
                      <p className="text-xs text-muted-foreground">days remaining</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="mt-6 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium">Documents</h3>
                  <Separator className="my-4" />
                  <div className="space-y-4">
                    {employee_data.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                        <div>
                          <h4 className="font-medium">{doc.name}</h4>
                          <p className="text-sm text-muted-foreground">Uploaded on {doc.date}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
