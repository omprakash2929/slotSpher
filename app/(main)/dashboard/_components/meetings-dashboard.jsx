"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent,CardHeader,CardTitle } from "@/components/ui/card"
import { Calendar, CircleUser, Clock, Video } from "lucide-react"
import Link from "next/link"
import {format} from "date-fns"
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const MeetingDashboard = ({ title,dateTime,name }) => {
  return (
    <> 
                 <Card >
              
              <CardContent className="flex flex-col md:flex-row md:justify-between ">
              <CardHeader className="">
                <span className="text-sm  md:text-lg">{title}</span>
                <p className="text-sm text-gray-500">with {name}</p>
              </CardHeader>
                <div className="flex flex-col space-y-1 md:flex-row md:items-start md:space-x-4 md:space-y-0">

                  <div className="flex flex-1 flex-col space-y-2 md:flex-row md:items-center md:justify-end md:space-x-4 md:space-y-0">
                    <div className="flex items-center text-xs md:text-sm text-gray-500">
                      <Calendar className="mr-2 h-4 w-4" />
                      {format(new Date(dateTime), "PPP")}
                    </div>
                    <div className="flex items-center text-xs md:text-sm text-gray-500">
                      <Clock className="mr-2 h-4 w-4" />
                     {format(new Date(dateTime), "p")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
              
   
 
  </>
)
}

export default MeetingDashboard