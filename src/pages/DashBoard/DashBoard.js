import React from "react";
import { Outlet } from "react-router-dom";
import DashBoardSideBar from "../../components/DashBoardSideBar";

const DashBoard = () => {
  return (
    <DashBoardSideBar>
      <Outlet />
    </DashBoardSideBar>
  );
};

export default DashBoard;
