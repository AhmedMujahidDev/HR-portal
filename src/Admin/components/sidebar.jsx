import React from "react";
import { Link } from "react-router-dom";
import logo from "../../asset/hr-logo.png";
import { HelpCircle } from "lucide-react";

const link = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Employee", href: "/employee" },
  { name: "Attendance", href: "/attendance" },
  { name: "Leave", href: "/leave" },
  { name: "Payroll", href: "/payroll" },
  { name: "Task Management", href: "/task" },
  { name: "Profile", href: "/profile" },
  { name: "Role Permissions", href: "/role" },
  { name: "Settings", href: "/settings" },
];

const Sidebar = ({ isOpen }) => {
  return (
    <section
      className={`border-r transition-all duration-300 ${
        isOpen ? "w-60 px-6 " : "w-32 px-4"
      }`}
    >
      <div className="mx-auto w-full">
        {/* Logo stays visible always, just resizes */}
        <img
          src={logo}
          alt="Logo"
          className={`mx-0 object-contain transition-all duration-300 ${
            isOpen ? "w-24 h-24" : "w-20 h-20"
          }`}
        />

        {/* Menu + help hide when collapsed but keep column width */}
        <div
          className={`mt-8 space-y-10 transition-opacity duration-200 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none hidden"
          }`}
        >
          <ul className="flex flex-col items-start gap-6">
            {link.map((item, i) => (
              <li key={i} className="list-none relative group cursor-pointer">
                <Link
                  to={item.href}
                  className="text-sm sm:text-sm md:text-base hover:text-[#316aff] font-sans"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 text-sm sm:text-sm md:text-base font-sans mt-4 border p-2 rounded-xl cursor-pointer hover:bg-[#ecf2fd26]">
            <HelpCircle className="w-6 h-6" />
            <span>Help and Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
