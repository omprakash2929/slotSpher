"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import EventForm from "./event-Form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const CreateEventDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const create = searchParams.get("create");
    if (create === "true") {
      setIsOpen(true);
    }
  }, [searchParams]);
  const handleClose = () => {
    setIsOpen(false);
    if (searchParams.get("create") === "true") {
      console.log("true");
      console.log("pathname", window?.location.pathname);
      router.replace(window?.location.pathname);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new event. Click save when you&apos;re
            done.
          </DialogDescription>
        </DialogHeader>
        <EventForm onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventDrawer;
