"use server";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function PageViewCount(username) {
  const session = auth(); // This may return null if user is not logged in
  const userId = session?.userId;

  // Optional: You can log or track who viewed the profile, if userId is available
  if (userId) {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      throw new Error("Authenticated user not found");
    }
  }

  // Find the profile owner by username
  const profileOwner = await db.user.findUnique({
    where: { username },
  });

  if (!profileOwner) {
    throw new Error("Profile owner not found");
  }

  // Increment the views for the profile owner
  const updatedUser = await db.user.update({
    where: { username },
    data: {
      views: { increment: 1 },
    },
  });

  return { views: updatedUser.views };
}

export async function getUserTotalViews() {
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
  const userTotalViews = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: {
      views: true,
    },
  });
  return userTotalViews;
}
