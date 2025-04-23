import { getUserByUsername } from "@/actions/users";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Share2,
  Star,
  Globe,
  Eye,
} from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
import EventCard from "@/components/event-card";
import UserProfileClient from "./_components/UserProfileClient";

export async function generateMetadata({ params }) {

  const user = await getUserByUsername(params.username,params.eventId);
  if (!user) {
    return {
      title: "Event not found",
    };
  }
  return {
    title: `${user.name}'s Profile | Schedulrr`,
    description: `Book an Event with ${user.name}. view available public envents and schedules.`,
  };
}

const UserPage = async ({ params }) => {
  
  const user = await getUserByUsername(params.username);
  if (!user) {
    notFound();
  }
  return (
    <div className="container mx-auto px-4 py-12 max-w-8xl relative">
    
      <div className="flex flex-col items-center text-center mb-12 relative">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarImage src={user.imageUrl} alt={user.name} />
          <AvatarFallback> {user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="bg-gray-100 backdrop-blur-sm py-3 px-6 rounded-full shadow-sm mb-4">
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200 mr-2"
          >
            <Globe className="h-3 w-3 mr-1" /> Available
          </Badge>
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            <Star className="h-3 w-3 mr-1" /> 4.9 (44 reviews)
          </Badge>
          
        </div>
        <h1 className="text-4xl font-bold mb-3 "> {user.name} </h1>
        <p className="text-gray-600 text-center max-w-lg mb-6 text-lg">
          Welcome to my scheduling page. Please select an event below to book a
          call wiht me.
        </p>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"
          >
            <ExternalLink className="h-4 w-4" />
            Copy Link
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white"
          >
            <Eye className="h-4 w-4" />
            <UserProfileClient  username={params.username} />
          </Button>
        </div>
      </div>
      {user.events.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <p className="text-gray-500 text-lg">No public events available.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {user.events.map((event) => {
            return (
              <EventCard
                key={event.id}
                event={event}
                username={params.username}
                isPublic
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserPage;
