import React, { ReactNode } from "react";
import NavBar from "./NavBar";
import Aside from "./Aside";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, SetSidebar] = React.useState(false);
  return (
    // Admin_Layout style in global css file
    <div className="Admin_Layout">
      <aside className={` ${sidebar ? "w-[240px]" : "w-[90px]"}  overflow-hidden  transition-all duration-200`}>
        <div
          className={` ${
            sidebar ? "w-[200px]" : "w-[80px]"
          } fixed h-screen overflow-hidden shadow-2xl transition-all duration-200`}
        >
          <Aside state={sidebar} />
        </div>
      </aside>
      {/* main section layout  */}
      <div className="admin_main">
        <button
          onClick={() => {
            SetSidebar((e) => !e);
          }}
        >
          test
        </button>
        {/* <header className="w-full"> */}
        {/* <nav className="fixed top-0 "> */}
        <NavBar />
        {/* </nav> */}
        {/* </header> */}
        <div>{children} </div>
      </div>
    </div>
  );
};

export default MainLayout;
