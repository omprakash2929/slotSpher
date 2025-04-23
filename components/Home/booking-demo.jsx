"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, Video, ArrowRight } from "lucide-react"

export default function BookingDemo() {
  const [selectedDate, setSelectedDate] = useState(22)
  const [selectedTime, setSelectedTime] = useState("11:00am")

  const dates = [
    { day: "MON", date: 21 },
    { day: "TUE", date: 22 },
    { day: "WED", date: 23 },
    { day: "THU", date: 24 },
    { day: "FRI", date: 25 },
  ]

  const times = ["10:00am", "11:00am", "1:00pm", "2:30pm", "4:00pm"]

  return (
    <div className="bg-white rounded-xl overflow-hidden max-w-md mx-auto">
      <div className="bg-slate-50 p-4 border-b">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="font-semibold text-primary">S</span>
          </div>
          <div>
            <h3 className="font-semibold">Schedulr Demo</h3>
            <p className="text-sm text-slate-500">30 min • Web conferencing</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h4 className="font-medium mb-3">Select a Date & Time</h4>

        <div className="flex justify-between mb-6">
          {dates.map((date) => (
            <button
              key={date.date}
              className={`flex flex-col items-center p-2 rounded-lg ${
                selectedDate === date.date ? "bg-primary text-white" : "hover:bg-slate-100"
              }`}
              onClick={() => setSelectedDate(date.date)}
            >
              <span className="text-xs">{date.day}</span>
              <span className="font-medium">{date.date}</span>
            </button>
          ))}
        </div>

        <div className="space-y-2 mb-6">
          {times.map((time) => (
            <button
              key={time}
              className={`w-full text-left p-3 rounded-lg border ${
                selectedTime === time ? "border-primary bg-primary/5" : "border-slate-200 hover:border-slate-300"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="bg-slate-50 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-slate-500 mt-0.5" />
            <div>
              <p className="font-medium">July {selectedDate}, 2025</p>
              <p className="text-slate-500">{selectedTime}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-3">
            <Video className="h-5 w-5 text-slate-500 mt-0.5" />
            <div>
              <p className="font-medium">Web conferencing</p>
              <p className="text-slate-500">Details provided upon confirmation</p>
            </div>
          </div>
        </div>

        <Button className="w-full gap-2 justify-center">
          Confirm <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
