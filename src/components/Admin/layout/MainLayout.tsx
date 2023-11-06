import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Aside from "./Aside";

const MainLayout = ({ children, User }: { children: React.ReactNode; User: any }) => {
  const [sidebar, SetSidebar] = React.useState(false);
  return (
    // Admin_Layout style in global css file
    <div className="Admin_Layout">
      <aside
        className={` ${
          sidebar ? "min-w-[240px]" : "w-0 xl:w-[90px]"
        } absolute overflow-hidden   bg-white  transition-all duration-200 md:mr-[6px] xl:relative `}
      >
        <div
          className={` ${
            sidebar ? "w-[240px]" : "w-0 xl:w-[90px]"
          } fixed h-screen overflow-hidden shadow-2xl transition-all duration-200`}
        >
          <Aside state={sidebar} setSidebar={SetSidebar} />
        </div>
      </aside>
      {/* main section layout  */}
      <div className="admin_main transition-all duration-200">
        <div>notifications section</div>
        <NavBar sidebarState={[sidebar, SetSidebar]} User={User} />
        <div>{children} </div>
      </div>
    </div>
  );
};

export default MainLayout;
