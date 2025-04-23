import { getUserEvents } from "@/actions/events";
import EventCard from "@/components/event-card";
import { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
export default function EventsPage(params) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Evets />

    </Suspense>
  )
}

const Evets = async () => {
  const {events, username} = await getUserEvents();
  if(events.length === 0) {
    return <Card className="flex w-[320px] h-[180px] items-center justify-center border-dashed">
    <Link  href={"/events?create=true"}>
    <Button  variant="ghost" className="h-auto flex-col p-6" >
      <Plus className="mb-2 h-6 w-6" />
      <span>New Event Type</span>
    </Button>
    </Link>
  </Card>

  }
  return <div className="space-y-6">
     <div className="flex items-center justify-between">
     <Tabs defaultValue="active" className="w-full">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="archived">Archived</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="mt-6 cursor-pointer">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {events.map((event) => (
      <EventCard key={event.id} event={event} username={username} />
    ))}
    <Card className="flex h-[180px] items-center justify-center border-dashed">
    <Link  href={"/events?create=true"}>
    <Button  variant="ghost" className="h-auto flex-col p-6" >
      <Plus className="mb-2 h-6 w-6" />
      <span>New Event Type</span>
    </Button>
    </Link>
      </Card>
    </div>
      </TabsContent>
      <TabsContent value="archived" className="mt-6">
        <div className="rounded-lg border border-dashed p-8 text-center">
          <h3 className="text-lg font-medium">No archived event types</h3>
          <p className="mt-1 text-sm text-gray-500">
            Event types you archive will appear here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
    

    </div>
  </div>;
};
