import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
