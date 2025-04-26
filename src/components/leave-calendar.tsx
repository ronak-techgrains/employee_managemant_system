"use client";

import { useState } from "react";
import { Calendar } from "../components/ui/calendar";
import { Card, CardContent } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";

// Sample leave data
const leaveData = {
  "2025-04-21": [
    {
      id: 1,
      name: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
      type: "Annual Leave",
    },
    {
      id: 2,
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
      type: "Annual Leave",
    },
  ],
  "2025-04-22": [
    {
      id: 1,
      name: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
      type: "Annual Leave",
    },
    {
      id: 2,
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
      type: "Annual Leave",
    },
    {
      id: 3,
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "BS",
      type: "Sick Leave",
    },
  ],
  "2025-04-23": [
    {
      id: 1,
      name: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
      type: "Annual Leave",
    },
    {
      id: 2,
      name: "Alice Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
      type: "Annual Leave",
    },
  ],
  "2025-04-27": [
    {
      id: 3,
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "BS",
      type: "Sick Leave",
    },
  ],
  "2025-05-02": [
    {
      id: 4,
      name: "Carol Williams",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "CW",
      type: "Personal Leave",
    },
  ],
  "2025-05-03": [
    {
      id: 4,
      name: "Carol Williams",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "CW",
      type: "Personal Leave",
    },
  ],
};

export function LeaveCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  const getLeaveData = (date: Date | undefined) => {
    if (!date) return [];
    const formattedDate = formatDate(date);
    return leaveData[formattedDate as keyof typeof leaveData] || [];
  };

  const renderDayContent = (day: Date) => {
    const leaves = getLeaveData(day);

    if (leaves.length > 0) {
      return (
        <div className="flex flex-col items-center">
          <div className="h-1.5 w-1.5 rounded-full bg-primary mx-auto" />
          {leaves.length > 1 && (
            <span className="text-[0.6rem] text-muted-foreground">
              +{leaves.length}
            </span>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          components={{
            // DayContent: ({ date, day }) => (
            //   <div className="flex flex-col items-center justify-center h-full">
            //     <div>{day.day}</div>
            //     {renderDayContent(day.date)}
            //   </div>
            // ),
          }}
        />
      </div>
      <Card className="flex-1">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h3 className="font-medium">
              {date
                ? date.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Select a date"}
            </h3>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Employees on Leave</h4>
              <ScrollArea className="h-[300px]">
                {getLeaveData(date).length > 0 ? (
                  <div className="space-y-4">
                    {getLeaveData(date).map((leave, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={leave.avatar || "/placeholder.svg"}
                            alt={leave.name}
                          />
                          <AvatarFallback>{leave.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {leave.name}
                          </p>
                          <div className="flex items-center">
                            <Badge variant="outline" className="mr-2">
                              {leave.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    No employees on leave for this date.
                  </p>
                )}
              </ScrollArea>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
