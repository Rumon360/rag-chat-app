import { UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <header className="sticky top-0 border-b py-4 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between px-4">
        <div className="text-foreground text-lg font-semibold">
          <span>
            Rag<span className="text-blue-500">Chat</span>App
          </span>
        </div>
        <UserButton />
      </div>
    </header>
  );
}

export default Header;
