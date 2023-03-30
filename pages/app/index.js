import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import StakeApp from "./StakeApp";

export default function app() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        {/* Static sidebar */}
        <SideBar />
        <NavBar />
        <StakeApp />
      </div>
    </>
  );
}
