"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getLatestUpdates() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const now = new Date();

  const upcomingMeetings = await db.booking.findMany({
    where: {
      userId: user.id,
      startTime: { gte: now },
    },
    include: {
      event: {
        select: {
          title: true,
        },
      },
    },
    orderBy: {
      startTime: "asc",
    },
    take: 3,
  });

  return upcomingMeetings;
}

export async function getTotalEvents() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }


  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }
  const totalEvents = await db.event.count({
    where: {
      userId: user.id,
    },
  });
  return totalEvents;
}

export async function getTotalBookings() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) {
    throw new Error("User not found");
  }
  const totalBookings = await db.booking.count({
    where: {
      userId: user.id,
    },
  });
  return totalBookings;
}

