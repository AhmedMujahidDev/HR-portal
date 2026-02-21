import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar";

const Navbar = () => {
  const SIDEBAR_WIDTH = "16rem"; // same as your sidebar width

  return (
    <SidebarProvider>
      {/* SidebarTrigger will handle sidebar toggle */}
      <SidebarTrigger />

      {/* Full page wrapper */}
      <div className="flex">
        {/* Main area */}
        <div className="flex-1 flex flex-col min-h-screen" style={{ marginLeft: SIDEBAR_WIDTH }}>
          {/* Navbar */}
          <header
            className="flex items-center justify-between px-2 py-4 bg-white shadow w-full fixed top-0 z-50"
            style={{ left: SIDEBAR_WIDTH }}
          >
            {/* Logo */}
            <div className="text-xl font-bold">My App</div>

            {/* Search */}
            <div className="flex items-center max-w-xs w-full mx-4">
              <Search className="mr-2 text-gray-400" />
              <Input type="search" placeholder="Search..." className="w-full" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost">Login</Button>
              <Button>Signup</Button>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 p-6 pt-24">
            {/* pt-24 = push content below fixed navbar */}
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p>Your content goes here</p>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Navbar;
