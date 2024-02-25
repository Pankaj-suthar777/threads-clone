import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="container">
      <Button>helo</Button>
      <ThemeToggle></ThemeToggle>
      {session && JSON.stringify(session)}
    </div>
  );
}
