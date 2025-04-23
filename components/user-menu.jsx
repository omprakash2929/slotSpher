"use client"
import { UserButton,useUser } from "@clerk/nextjs";
import { ChartNoAxesGantt, LayoutDashboard,CircleUserRound } from "lucide-react";
import React from "react";



export  const Usermenu = () => {
  const { user } = useUser();
  console.log( user?.username)
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-8 h-8",
        },
      }}
    >

        <UserButton.MenuItems>
        <UserButton.Link label="Profile" labelIcon={<CircleUserRound  size={20}/>} href={`/${user?.username}`}>
        </UserButton.Link>
        <UserButton.Link label="Dashboard" labelIcon={<LayoutDashboard size={15}/>} href="/dashboard">
        </UserButton.Link>
            <UserButton.Link label="My Events" labelIcon={<ChartNoAxesGantt size={15}/>} href="/events">
            </UserButton.Link>
          <UserButton.Action label="manageAccount"/>
        </UserButton.MenuItems>
    </UserButton>
  );
};
