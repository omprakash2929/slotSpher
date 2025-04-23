"use client";

import { Button } from "@/components/ui/button";
import { cancelMeeting } from "@/actions/meetings";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { Trash2 } from "lucide-react";

export default function CancelMeetingButton({ meetingId }) {
  const router = useRouter();

  const { loading, error, fn: fnCancelMeeting } = useFetch(cancelMeeting);

  const handleCancel = async () => {
    if (window.confirm("Are you sure you want to cancel this meeting?")) {
      await fnCancelMeeting(meetingId);
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col gap-1">
           <Button variant="destructive" onClick={handleCancel} disabled={loading}   size="sm" className="mt-2 md:mt-0 ">
               
           <Trash2 className=" h-4 w-4" /> {loading ? "Canceling..." : "Cancel"}
              </Button>
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
}