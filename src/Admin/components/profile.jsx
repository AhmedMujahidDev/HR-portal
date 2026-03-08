import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  
  import { Button } from "@/components/ui/button"
  
  import {
    User,
    ListChecks,
    HelpCircle,
    Settings,
    DollarSign,
    LogOut
  } from "lucide-react"

const profile = () => {
  return (
    <DropdownMenu>

  <DropdownMenuTrigger asChild>
    {/* <Button variant="outline" className="flex items-center gap-2"> */}
    <div className="flex item-center gap-2">
        <div className="flex flex-col">
    <h1 className="text-sm font-bold text-right">Robert Brown</h1>
    <p className="text-xs text-muted-foreground text-right">Manager</p>
    </div>
      <Avatar className="h-8 w-8">
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>RB</AvatarFallback>
      </Avatar>
    {/* </Button> */}
    </div>
  </DropdownMenuTrigger>

  <DropdownMenuContent className="w-52 text-text-color" align="end" sideOffset={20}>

    {/* User Info */}
    <DropdownMenuLabel className="flex items-center gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage src="/avatar.jpg" />
        <AvatarFallback>RB</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <span className="font-medium text-black">Robert Brown</span>
        <span className="text-xs text-muted-foreground">
          robert@gmail.com
        </span>
      </div>
    </DropdownMenuLabel>

    <DropdownMenuSeparator />

    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" />
      View Profile
    </DropdownMenuItem>

    <DropdownMenuItem>
      <ListChecks className="mr-2 h-4 w-4" />
      My Task
    </DropdownMenuItem>

    <DropdownMenuItem>
      <HelpCircle className="mr-2 h-4 w-4" />
      Help Center
    </DropdownMenuItem>

    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      Account Settings
    </DropdownMenuItem>

    <DropdownMenuSeparator />

    <DropdownMenuItem className="text-red-500 focus:text-red-500">
      <LogOut className="mr-2 h-4 w-4" />
      Log Out
    </DropdownMenuItem>

  </DropdownMenuContent>

</DropdownMenu>
  )
}

export default profile