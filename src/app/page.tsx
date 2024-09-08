"use client";

import ChewingTimer from "@/components/ChewingTimer";

export default function Home() {
  // const date = "2024,10,10";

  return (
    <main className=" w-full max-h-screen h-screen  flex justify-center items-center">
      <ChewingTimer className="w-1/3 h-1/2 md:w-1/4" />
    </main>
  );
}
