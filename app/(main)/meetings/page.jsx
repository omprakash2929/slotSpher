import React, { Suspense } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUserMeetings } from '@/actions/meetings'
import MeetingList from './_components/meeting-list'

export const metadata = {
  title: "Your Meetings | SlotSphere",
  description: "View and menage your upcoming and past meetings.",
};


const MeetingPage = () => {
  return (
    <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold text-blue-600">Meetings</h1>
    </div>

    <Tabs defaultValue="upcoming" className="w-full">
      <TabsList>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming" className="mt-6 space-y-6">
        <Suspense fallback={<div>Loading...</div>}>
        <UpcomingMeetings />
        </Suspense>
       
      </TabsContent>
      <TabsContent value="past" className="mt-6 space-y-6">
        <Suspense fallback={<div>Loading...</div>}>
        <PastMeetings />
        </Suspense>
      </TabsContent>
    </Tabs>
  </div>
  )
}

export default MeetingPage;

async function UpcomingMeetings() {
 const meetings = await getUserMeetings("upcoming");
 return <MeetingList meetings={meetings} type={"upcoming"} />
}
async function PastMeetings() {
 const meetings = await getUserMeetings("past");
 return <MeetingList meetings={meetings} type={"past"} />
}