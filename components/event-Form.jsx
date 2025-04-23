"use client";
import { eventSchema } from "@/app/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import useFetch from "@/hooks/use-fetch";
import { createEvent } from "@/actions/events";

const EventForm = ({ onClose }) => {
  const form = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      description: "",
      duration: 30,
      isPrivate: true,
    },
  });

  const {loading,error,fn:fnCreateEvent} = useFetch(createEvent)
  async function handleSubmit(values) {
    await fnCreateEvent(values);
    if(!loading && !error) {
      onClose();
    }
    form.reset();
  }
  const handleFormClose = () => {
    onClose();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Event title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your event"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration (minutes) </FormLabel>
              <FormControl>
                <Input
                type="number"
                  placeholder="e.g. 1 hour, 30 minutes"
                  {...field}  onChange={(e) =>
                    field.onChange(e.target.valueAsNumber) 
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isPrivate"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Private Event</FormLabel>
                <FormDescription>
                  Make this event private and only visible to invited attendees.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {error && <p className="text-red-500">{error.message}</p>}
        <DialogFooter>
          <Button type="button" variant="outline" onClick={handleFormClose}>
            Cancel
          </Button>
          <Button type="submit" disable={loading} >Create Event</Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default EventForm;
