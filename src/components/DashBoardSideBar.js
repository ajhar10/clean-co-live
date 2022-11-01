import React from "react";
import { NavLink } from "react-router-dom";

const DashBoardSideBar = ({ children }) => {
  return (
    <div>
      <div class="drawer drawer-mobile bg-accent mt-16">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content mt-5">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to="/dashboard/add-service">Add-Service</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-admin">Add-Amin</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardSideBar;
