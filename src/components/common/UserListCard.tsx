"use client";
import React from "react";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { Button } from "../ui/button";

const UserListCard = () => {
  return (
    <div className="w-full shadow-sm p-4 rounded-md mb-3">
      <div className="flex items-center">
        <UserAvatar name="Pankaj" image="" />
        <div className="flex justify-between items-center w-full">
          <div className="flex-col flex">
            <strong className="text-md font-bold ml-2">Pankaj</strong>
            <span className="ml-2 font-light text-sm">@Pankaj</span>
          </div>
          <Link href="#">
            <Button size="sm">View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserListCard;
