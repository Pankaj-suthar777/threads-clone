import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import LeftSidebar from "@/components/base/LeftSidebar";
import BaseComponent from "@/components/base/BaseComponent";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return <BaseComponent />;
}
