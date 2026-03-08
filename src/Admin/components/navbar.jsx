import React, { useState, useContext } from "react";
import {
  Menu,
  SearchIcon,
  X,
  XCircle,
  Sun,
  Moon,
  SunMoon,
  Mail,
  Bell,
  Calendar,
} from "lucide-react";
import { ThemeContext } from "@/context/ThemeContext";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Profile from "./profile";

const Navbar = ({ isSidebarOpen, onToggleSidebar }) => {
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // TODO: filter dashboard data here
    console.log("Search query:", value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("Search submitted:", query);
    }
  };

  return (
    <nav className="sticky top-0 bg-background text-foreground border-b border-border items-center px-4 py-5 z-10">
      <div className="w-full">
        <div className="flex items-center justify-between gap-4">
          {/* Left: menu + search */}
          <div className="flex items-center gap-10 flex-1 min-w-0">
            {isSidebarOpen ? (
              <Menu
                className="w-6 h-6 cursor-pointer shrink-0 text-text-color"
                onClick={onToggleSidebar}
              />
            ) : (
              <X
                className="w-6 h-6 cursor-pointer shrink-0"
                onClick={onToggleSidebar}
              />
            )}
            <span className="sr-only">Toggle Sidebar</span>
            <div className="flex items-center gap-2 flex-1 max-w-xs border hover:border-2 hover:border-primary rounded-full px-4 py-2 bg-input/30">
              <SearchIcon className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search anything..."
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                className="w-full border-none outline-none text-sm text-foreground placeholder:text-muted-foreground bg-transparent min-w-0"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground focus:outline-none shrink-0"
                >
                  <XCircle className="w-4 h-4" />
                  <span className="sr-only">Clear search</span>
                </button>
              )}
            </div>
            <h2 className="text-sm text-text-color font-sans font-medium cursor-pointer shrink-0 hidden sm:block">
              Help
            </h2>
          </div>

          {/* Right: theme */}
          <div className="flex items-center gap-7 shrink-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 min-w-6 p-0 rounded-full border-0 shadow-none text-text-color focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
                >
                  {theme === "dark" && <Moon className="size-5 text-text-color" />}
                  {theme === "light" && <Sun className="size-5 text-text-color" />}
                  {theme === "system" && <SunMoon className="size-5 text-text-color" />}
                  <span className="sr-only">Theme: {theme}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 size-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 size-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <SunMoon className="mr-2 size-4" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Separator orientation="vertical" className="h-8 bg-text-color" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 min-w-6 p-0 rounded-full border-0 shadow-none text-text-color focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
            >
              <Mail className="size-5 text-text-color" />
              <span className="sr-only">Mail</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 min-w-6 p-0 rounded-full border-0 shadow-none text-text-color focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
            >
              <Bell className="size-5 text-text-color" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 min-w-6 p-0 rounded-full border-0 shadow-none text-text-color focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
            >
              <Calendar className="size-5 text-text-color" />
              <span className="sr-only">Calendar</span>
            </Button>

            <Separator orientation="vertical" className="h-8 bg-text-color" />

            <Profile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
