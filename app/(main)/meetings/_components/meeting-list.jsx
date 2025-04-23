import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Calendar, Clock, User, Video } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import Link from 'next/link'
import CancelMeetingButton from './cancel-meeting'
const MeetingList = ({meetings, type}) =>{


    if(meetings.length === 0) {
        return (
            <div className="flex flex-col space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
                <div className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10 border">
                        <AvatarFallback>
                            <User className="h-4 w-4" />
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium">No {type} meetings</p>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <>
   
    {meetings.map((meeting)=>{
        return  ( <Card key={meeting.id}>
        <CardHeader className="">
          <CardTitle className="text-2xl">{meeting.event.title}</CardTitle>
            <p className="text-sm text-gray-500">{meeting.event.description}</p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
            <div className="flex items-start space-x-4">
              <Avatar className="h-10 w-10 border">
                <AvatarFallback> <User className="h-4 w-4" /></AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium"> with {meeting.name}</p>
                <p className="text-sm text-gray-500">{meeting.email}</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col  space-y-2 md:flex-row md:items-center md:justify-end md:space-x-4 md:space-y-0">
             
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="mr-2 h-4 w-4" />
                {format(new Date(meeting.startTime), "MMMM d, yyyy")}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="mr-2 h-4 w-4" />
                {format(new Date(meeting.startTime), "h:mm a")} -
                {format(new Date(meeting.endTime), "h:mm a")}
              </div>
              {type === "upcoming" && (
                <CancelMeetingButton meetingId={meeting.id} />
              )}

              {meeting.meetLink && ( 
                <Link href={meeting.meetLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="mt-2 md:mt-0" >
                <Video className="mr-2 h-4 w-4" />
                Join
              </Button>
                </Link>
                
               )}
              
            </div>
          </div>
        </CardContent>
      </Card>)
    })}
   </>
  )
}

export default MeetingList 