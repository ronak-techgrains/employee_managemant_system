// This file contains mock data for the application
// In a real application, this would be replaced with API calls to a backend

export interface Employee {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  avatar: string
  initials: string
  department: string
  position: string
  status: string
  joinDate: string
  endDate?: string
  salary: string
  manager: string
  address: string
  emergencyContact: string
  skills: string[]
  education: {
    degree: string
    institution: string
    year: string
  }[]
  documents: {
    name: string
    date: string
  }[]
  attendance: {
    present: number
    absent: number
    leave: number
  }
  leaveBalance: {
    annual: number
    sick: number
    personal: number
  }
}

const employees: Employee[] = [
  {
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
  },
  {
    id: "2",
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    phone: "+1 (555) 234-5678",
    avatar: "/placeholder.svg?height=128&width=128",
    initials: "AJ",
    department: "Marketing",
    position: "Marketing Manager",
    status: "Active",
    joinDate: "March 10, 2023",
    salary: "$75,000",
    manager: "Robert Brown",
    address: "456 Oak St, Anytown, CA 12345",
    emergencyContact: "Mark Johnson (Husband) - +1 (555) 876-5432",
    skills: ["Marketing Strategy", "Social Media", "Content Creation", "SEO", "Analytics"],
    education: [
      {
        degree: "Bachelor of Arts in Marketing",
        institution: "State University",
        year: "2017",
      },
      {
        degree: "Master of Business Administration",
        institution: "Business School",
        year: "2019",
      },
    ],
    documents: [
      {
        name: "Employment Contract",
        date: "Mar 5, 2023",
      },
      {
        name: "NDA Agreement",
        date: "Mar 5, 2023",
      },
      {
        name: "Tax Forms",
        date: "Mar 7, 2023",
      },
    ],
    attendance: {
      present: 90,
      absent: 2,
      leave: 8,
    },
    leaveBalance: {
      annual: 18,
      sick: 10,
      personal: 3,
    },
  },
]

export function getEmployees() {
  return employees
}

export function getEmployeeById(id: string) {
  return employees.find((employee) => employee.id === id) || employees[0]
}
