"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Clock,
  Users,
  Link,
} from "lucide-react";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usernameSchema } from "@/app/lib/validators";
import useFetch from "@/hooks/use-fetch";
import { updateUsername } from "@/actions/users";
import { BarLoader } from "react-spinners";
import {
  getLatestUpdates,
  getTotalBookings,
  getTotalEvents,
} from "@/actions/dashboard";
import { getUserTotalViews } from "@/actions/pageView";
import MeetingDashboard from "./_components/meetings-dashboard";
import EventTypes from "./_components/event-type";
import { getUserEvents } from "@/actions/events";

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(usernameSchema),
  });
  
  useEffect(() => {
    setValue("username", user?.username);
  }, [isLoaded, user]);
  const onSubmit = async (data) => {
    await fnUpdateUsername(data.username);
  };

  const { loading, error, fn: fnUpdateUsername } = useFetch(updateUsername);
  const {
    data: dataEvent,
    loadingEvents,
    errorEvents,
    fn: fnGetUserEvenets,
  } = useFetch(getUserEvents);

  const {
    loading: loadingUpdates,
    data: upcomingMeetings,
    fn: fnUpdates,
  } = useFetch(getLatestUpdates);

  const {
    loading: loadingTotalEvents,
    data: totalEvents,
    fn: fnTotalEvent,
  } = useFetch(getTotalEvents);
  const {
    loading: loadingTotalBooking,
    data: totalBooking,
    fn: fnTotalBooking,
  } = useFetch(getTotalBookings);
  const {
    loading: loadingTotalView,
    data: totalView,
    fn: fnTotalView,
  } = useFetch(getUserTotalViews);
  useEffect(() => {
    (async () => await fnUpdates())();
    (async () => await fnTotalEvent())();
    (async () => await fnTotalBooking())();
    (async () => await fnTotalView())();
    (async () => await fnGetUserEvenets())();
  }, []);

  console.log(dataEvent);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome, {user?.firstName}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Your Unique Link</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span>
                  {typeof window !== "undefined" ? window.location.origin : ""}/
                </span>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="username" />
                  )}
                />
              </div>
              {errors.username && (
                <span className="text-red-500">{errors.username.message}</span>
              )}
              {error && <span className="text-red-500">{error?.message}</span>}
            </div>
            {loading && (
              <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
            )}
            <Button type="submit">Update Username</Button>
          </form>
        </CardContent>
      </Card>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Events</CardTitle>
            <CalendarDays className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {!loadingTotalEvents ? totalEvents : "0"}
            </div>
            {/* <p className="text-xs text-gray-500">+2 from last month</p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Upcoming Meetings
            </CardTitle>
            <Clock className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {!loadingUpdates ? upcomingMeetings?.length : "0"}
            </div>
            {/* <p className="text-xs text-gray-500">Next: Today at 3:00 PM</p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Bookings
            </CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {!loadingTotalBooking ? totalBooking : "0"}
            </div>
            {/* <p className="text-xs text-gray-500">+15% from last month</p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Profile Page Views
            </CardTitle>
            <Link className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {!loadingTotalView ? totalView?.views : "0"}
            </div>
            {/* <p className="text-xs text-gray-500">32% conversion rate</p> */}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
            <CardDescription>
              Your schedule for the next few days
            </CardDescription>
            {!loadingUpdates ? (
              <CardContent className="px-2">
                {upcomingMeetings && upcomingMeetings?.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingMeetings?.map((meeting) => (
                      <MeetingDashboard
                        title={meeting.event.title}
                        name={meeting.name}
                        dateTime={meeting.startTime}
                      />
                    ))}
                  </div>
                ) : (
                  <p>No upcoming meetings</p>
                )}
              </CardContent>
            ) : (
              <p>Loading updates...</p>
            )}
          </CardHeader>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Your Event Types</CardTitle>
            <CardDescription>Manage your scheduling links</CardDescription>
          </CardHeader>
          {!loadingEvents ? (
            <div className="space-y-4 px-4">
              {dataEvent?.events?.length > 0 ? (
                dataEvent.events.map((event) => (
                  <EventTypes key={event.id} event={event}  username={dataEvent.username} />
                ))
              ) : (
                <p> Loading events..</p>
              )}
            </div>
          ) : (
            <p>No events found.</p>
          )}
        </Card>
      </div>
    </div>
  );
}
