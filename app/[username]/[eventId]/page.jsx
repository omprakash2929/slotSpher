import { getEventAvailability } from '@/actions/availability';
import { getEventDetails } from '@/actions/events';
import React, { Suspense } from 'react'
import { EventDetails } from './_components/event-details';
import BookingForm from './_components/booking-form';
import BookingWrapper, { BookingProvider } from './context/BookingContext';




export async function generateMetadata({ params }) {
  const event = await getEventDetails(params.username);
  if (!event) {
    return {
      title: "Event not found",
    };
  }
  return {
    title: `Book ${event.title} with ${event.user.name} | Your App Name`,
    description: `Schedule a ${event.duration}-minute ${event.title} event with ${event.user.name}.`,
  };
}
const EventBookingPage = async ({ params }) => {
    const event = await getEventDetails(params.username, params.eventId);
  const availability = await getEventAvailability(params.eventId);

  if (!event) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className='max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
          <div className='grid md:grid-cols-2'>
          <BookingProvider>
          <EventDetails   event={event} />
           <Suspense fallback={<div>Loading booking form...</div>}>
          <BookingForm  availability={availability} event={event}  />
          </Suspense>
          </BookingProvider>
          </div>
       
        </div>
          
    </div>
  )
}

export default EventBookingPage