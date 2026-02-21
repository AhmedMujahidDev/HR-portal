// import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../../asset/hr-logo.png'

// const Sidebar = () => {
//   return (
//     <>
//         <aside className='bg-[#8c96a9] w-64 h-screen bg-grey-800 test-white p-4'>
//             <img src={logo} alt="logo" className='w-24'/>
//             <ul className='space-y-4'>
//                 <h1 className='text-2xl font-bold mb-6'>Admin Panel</h1>
//                 <li>
//                     <Link to ="#" className="text-xl hover:text-[#316aff]">Dashboard</Link>
//                 </li>

//                 <li>
//                     <Link to ="#" className="text-xl hover:text-[#316aff]">Employee</Link>
//                 </li>

//                 <li>
//                     <Link to ="#" className="text-xl hover:text-[#316aff]">Attendance</Link>
//                 </li>

//                 <li>
//                     <Link to ="#" className="text-xl hover:text-[#316aff]">Leave</Link>
//                 </li>

//                 <li>
//                     <Link to ="#" className="text-xl hover:text-[#316aff]">Payroll</Link>
//                 </li>

//                 <li>
//                     <Link to ="#" className="text-xl hover:text-[#316aff]">Profile</Link>
//                 </li>

//                 <li>
//                     <Link to ="#" className="text-xl hover:text-[#316aff]">Login</Link>
//                 </li>

//                 <li>
//                     <Link to ="#" className="text-xl hover:text-[#316aff]">Register</Link>
//                 </li>

//                 <li>
//                     <Link to ="#" className="text-xl hover:text-[#316aff]">Forgot Password</Link>
//                 </li>
//             </ul>
//         </aside> 
//     </>
//   )
// }

// export default Sidebar


import { 
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import HR from "../../asset/hr-logo.png"

export default function SidebarSection() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            {/* <h2 className="text-lg font-semibold">My App</h2> */}
            <img 
            src={HR} 
            alt="logo" 
            className=""/>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-2xl font-bold">
                Dashboard
              </SidebarGroupLabel>

              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-lg font-medium">
                      Employee
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-lg font-medium">
                      Attendance
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-lg font-medium">
                      Leave
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-lg font-medium">
                      Payroll
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-lg font-medium">
                      Login
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-lg font-medium">
                      SignUp
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-lg font-medium">
                      Forgot Password
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-lg font-medium">
                      Profile
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <p className="text-sm text-muted-foreground">© 2026</p>
          </SidebarFooter>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}
