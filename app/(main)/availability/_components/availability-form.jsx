import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WeeklySchedule from './weekly-schedule'

const AvailabilityForm = ({ initialData }) => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="hours" className="w-full h-full">
        <TabsList>
          <TabsTrigger value="hours">Working Hours</TabsTrigger>
          <TabsTrigger value="dates">Date Ranges</TabsTrigger>
        </TabsList>
        <TabsContent value="hours" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Set your weekly hours</CardTitle>
              <CardDescription>Define when you&apos;re available for meetings during the week</CardDescription>
            </CardHeader>
            <CardContent>
              <WeeklySchedule initialData={initialData} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dates" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Date Ranges</CardTitle>
              <CardDescription>Set specific date ranges when you&apos;re unavailable</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add your form inputs or UI elements for date ranges here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AvailabilityForm
