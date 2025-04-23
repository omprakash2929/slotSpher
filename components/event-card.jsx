"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CopyCheck,
  Link,
  Loader,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { deleteEvent } from "@/actions/events";

const EventCard = ({ event, username, isPublic = false }) => {
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/${username}/${event.id}`
      );
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy", err);
    }
  };

  const { loading, fn: fnDeletEvent } = useFetch(deleteEvent);

  const handleDelete = async () => {
    if (window?.confirm("Are you sure you want to delete this event?")) {
      await fnDeletEvent(event.id);
      router.refresh();
    }
  };


  const handleCardClick = (e) =>{
    if(e.target.tagName !== "BUTTON" && e.target.tagName !== "SVG"){
      window?.open(
        `${window?.location.origin}/${username}/${event.id}`,
        "_blank"
      )
    }
  }
  return (
   
      <Card key={event.id} className="gap-3 cursor-pointer" onClick={handleCardClick}>
        <CardHeader className="">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl font-semibold">
                {event.title}
              </CardTitle>
              <CardDescription className="mt-1 ">
                {event.duration} mins | {event.isPrivate ? "Private" : "Public"}{" "}
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            {event.description.substring(0, event.description.indexOf("."))}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-base text-gray-900  truncate">
              {event._count.bookings} Bookings
            </p>
            {!isPublic && (
              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={handleDelete}
                  disabled={loading}
                >
                  {loading ? (
                    <Loader color="#fd6868" className="h-4 w-4" />
                  ) : (
                    <Trash2 color="#fd6868" className="h-4 w-4" />
                  )}

                  <span className="sr-only hover:bg-red-500  ">Delete</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={handleCopy}
                >
                  {isCopied ? (
                    <CopyCheck className="h-4 w-4" />
                  ) : (
                    <Link className="h-4 w-4" />
                  )}
                  <span className="sr-only">Copy link</span>
                </Button>
              </CardFooter>
            )}
          </div>
        </CardContent>
      </Card>
      
    
  );
};

export default EventCard;
