import Link from "next/link";
import React from "react";
import Home from "../assets/Home.svg";
import Inventory from "../assets/Inventory.svg";
import LogOut from "../assets/Log-Out.svg";
import Orders from "../assets/Order.svg";
import Report from "../assets/Report.svg";
import Settings from "../assets/Settings.svg";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className='w-52 border-r-white border-r-2 p-4'>
      <nav>
        <ul className="space-y-4">
          <Link href={"/"}>
            <li className="flex flex-row gap-2">
              <Image src={Home} alt="Home" />
              Dashboard
            </li>
          </Link>
          <Link href={"/"}>
            <li className="flex flex-row gap-2">
              <Image src={Inventory} alt="Inventory" />
              Inventory
            </li>
          </Link>
          <Link href={"/"}>
            <li className="flex flex-row gap-2">
              <Image src={Report} alt="Reports" />
              Reports
            </li>
          </Link>
          <Link href={"/"}>
            <li className="flex flex-row gap-2">
              <Image src={Orders} alt="Orders" />
              Orders
            </li>
          </Link>
        </ul>

        <ul>
          <Link href={"/"}>
            <li className="flex flex-row gap-2">
              <Image src={Settings} alt="Settings" />
              Settings
            </li>
          </Link>
          <Link href={"/"}>
            <li className="flex flex-row gap-2">
              <Image src={LogOut} alt="Log Out" />
              Log Out
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
