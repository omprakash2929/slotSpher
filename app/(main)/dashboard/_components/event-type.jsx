
import React from 'react'
import { Button } from "@/components/ui/button"
import { Copy, MoreHorizontal } from "lucide-react"
const EventTypes =  ({event,username}) => {
    
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
    
  return (
    <div className="space-y-3">
    
        <div key={event.id} className="flex items-center justify-between rounded-md border p-3">
          <div className="space-y-1">
            <p className="font-medium">{event.duration} mins </p>
            <p className="text-sm text-gray-500">{event.isPrivate ? "Private" : "Public"}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0" onClick={handleCopy}>
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy link</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </div>
        </div>

  
    </div>
  )
}

export default EventTypes