"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-full w-full justify-center items-center gap-y-4 flex flex-col">
      <div>
        Welocome To Novera
      </div>
      <Button onClick={() => router.push("/dashboard")} variant="outline" className="w-72 h-12 border-2 border-white hover:bg-white hover:text-black hover:font-bold">
        Dashboard
      </Button>
    </div>
  );
}
