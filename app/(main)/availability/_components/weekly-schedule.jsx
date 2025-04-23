"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { timeSlots } from "../data";
import { zodResolver } from "@hookform/resolvers/zod";
import { availabilitySchema } from "@/app/lib/validators";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/use-fetch";
import { updateAvailability } from "@/actions/availability";

const WeeklySchedule = ({initialData}) => {

    const {
        control,
        handleSubmit,
        watch,
        setValue,
        register,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(availabilitySchema),
        defaultValues: {...initialData},
      })
      const days = [
        { key: "monday", name: "Monday" },
        { key: "tuesday", name: "Tuesday" },
        { key: "wednesday", name: "Wednesday" },
        { key: "thursday", name: "Thursday" },
        { key: "friday", name: "Friday" },
        { key: "saturday", name: "Saturday" },
        { key: "sunday", name: "Sunday" },
      ]
      
      const { loading, error, fn: fnUpdateAvailability } = useFetch(updateAvailability)

      const onSubmit = async (data) => {
        await fnUpdateAvailability(data)
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {days.map((day) => {
        const isAvailable = watch(`${day.key}.isAvailable`)

        return (
          <div key={day.key} className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 rounded-md border p-4">
            <div className="w-full sm:w-1/4">
              <div className="flex items-center space-x-2">
                <Controller
                  name={`${day.key}.isAvailable`}
                  control={control}
                  render={({ field }) => (
                    <Switch
                      id={`${day.key.toLowerCase()}-toggle`}
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        setValue(`${day.key}.isAvailable`, checked)
                        if (!checked) {
                          setValue(`${day.key}.startTime`, "09:00")
                          setValue(`${day.key}.endTime`, "17:00")
                        }
                      }}
                    />
                  )}
                />
                <Label htmlFor={`${day.key.toLowerCase()}-toggle`}>{day.name}</Label>
              </div>
            </div>
            <div className="flex flex-wrap w-full sm:flex-1 items-center gap-2">
              <Controller
                name={`${day.key}.startTime`}
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value} disabled={!isAvailable}>
                    <SelectTrigger className="w-[110px]">
                      <SelectValue placeholder="Start time" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px] overflow-y-auto">
                      {timeSlots.map((time) => (
                        <SelectItem key={`start-${time}`} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              <span className="text-gray-500">to</span>
              <Controller
                name={`${day.key}.endTime`}
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value} disabled={!isAvailable}>
                    <SelectTrigger className="w-[110px] ">
                      <SelectValue placeholder="End time" />
                    </SelectTrigger>
                    <SelectContent className="max-h-[200px] overflow-y-auto">
                      {timeSlots.map((time) => (
                        <SelectItem key={`end-${time}`} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors[day.key]?.endTime && (
                <span className="text-red-500 text-sm">{errors[day.key].endTime.message}</span>
              )}
            </div>
          </div>
        )
      })}

      <div className="flex items-center space-x-4 rounded-md border p-4">
        <div className="w-1/4">
          <Label htmlFor="timeGap">Minimum gap before booking:</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Input
            id="timeGap"
            type="number"
            className="w-[110px]"
            {...register("timeGap", {
              valueAsNumber: true,
            })}
          />
          <span className="text-gray-500">minutes</span>
          {errors.timeGap && <span className="text-red-500 text-sm">{errors.timeGap.message}</span>}
        </div>
      </div>

      {error && <div className="text-red-500 text-sm mt-2">{error?.message}</div>}

      <div className="flex justify-end">
        <Button type="submit" disabled={loading} >
        {loading ? "Updating..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
};

export default WeeklySchedule;
