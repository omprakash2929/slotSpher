"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Clock, Video, CalendarIcon } from "lucide-react"
import { useBooking } from "../context/BookingContext"
import { format,parse } from "date-fns";
import { useMemo } from "react"

export const EventDetails = ({event}) => {
  const { yourDate,yourTime} = useBooking();
  const {user}  = event;
  // const time = yourTime; 
  const formattedTime = useMemo(() => {
    if (!yourTime) return null;
  
    try {
      const parsed = parse(yourTime, 'HH:mm', new Date());
      return format(parsed, 'hh:mm a');
    } catch {
      return null;
    }
  }, [yourTime]);
    

  return (
    <div className=''>
       <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
        <h1 className="text-3xl font-extrabold tracking-tight mb-6">Life Related Stuff</h1>
        <div className="flex items-center space-x-4 mb-6">
         <Avatar className="w-24 h-24 mb-4">
                   <AvatarImage src={user.imageUrl} alt={user.name} />
                   <AvatarFallback> {user.name.charAt(0)}</AvatarFallback>
                 </Avatar>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{user.name}</h2>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>


        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">{event.duration} minutes</p>
              <p className="text-sm text-muted-foreground">Duration</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-full">
              <Video className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Google Meet</p>
              <p className="text-sm text-muted-foreground">Web conferencing</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-medium text-muted-foreground">{event.description}</p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="prose prose-slate max-w-none">
          <p>If you need someone to talk to, you can with me. (But only for {event.duration} min)</p>
        </div>

       
        <div className="mt-8 p-4 bg-primary/5 rounded-lg">
            <h3 className="font-medium mb-2">Your selected time:</h3>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-primary" />
              <span>{yourDate
  ? <p>{yourDate}</p>
  : <p>Select Date</p>}</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="h-4 w-4 text-primary" />
              <span> {formattedTime ? <p>{formattedTime}</p>:"Select Time"} </span>
            </div>
          </div>
        
      </div>


    </div>
  )
}
