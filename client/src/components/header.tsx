import { UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 h-14 border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-full w-full items-center justify-between px-4">
        <div className="font-mono text-xl font-semibold">
          <span>
            Rag<span className="">Chat</span>App
          </span>
        </div>
        <UserButton />
      </div>
    </header>
  );
}

export default Header;
