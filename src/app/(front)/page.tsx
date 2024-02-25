import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Button>helo</Button>
      <ThemeToggle></ThemeToggle>
    </div>
  );
}
