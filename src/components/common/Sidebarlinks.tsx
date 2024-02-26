import Link from "next/link";
import React from "react";
import { Bell, Home, Search, User2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import ThemeToggle from "./ThemeToggle";

const Sidebarlinks = () => {
  const pathName = usePathname();

  return (
    <ul>
      <li className="mt-10">
        <Link
          href="/"
          className={`flex items-center justify-start space-x-4 hover:font-bold mb-6 ${
            pathName === "/" ? "font-bold" : ""
          }`}
        >
          <Home height={25} width={25} />
          <h3 className="text-lg lg:text-xl">Home</h3>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className={`flex items-center justify-start space-x-4 hover:font-bold mb-6  ${
            pathName === "/explore" ? "font-bold" : ""
          }`}
        >
          <Search height={25} width={25} />
          <h3 className="text-lg lg:text-xl">Explore</h3>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className={`flex items-center justify-start space-x-4 hover:font-bold mb-6  ${
            pathName === "/notification" ? "font-bold" : ""
          }`}
        >
          <Bell height={25} width={25} />
          <h3 className="text-lg lg:text-xl">Notifications</h3>
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className={`flex items-center justify-start space-x-4 hover:font-bold mb-6  ${
            pathName === "/profile" ? "font-bold" : ""
          }`}
        >
          <User2 height={25} width={25} />
          <h3 className="text-lg lg:text-xl">Profile</h3>
        </Link>
      </li>
      <li className="flex items-center absolute bottom-10">
        <Button size="sm" className="mr-10">
          Sign Out
        </Button>
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default Sidebarlinks;
