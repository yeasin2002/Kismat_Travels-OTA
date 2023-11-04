import Router from "next/router";
import { useState } from "react";

import style from "./Style.module.css";

const Loader = ({ children }: { children: any }) => {
  const [load, SetLoad] = useState(false);

  Router.events.on("routeChangeStart", () => {
    SetLoad(true);
  });
  Router.events.on("routeChangeComplete", () => {
    SetLoad(false);
  });

  return (
    <div>
      {load ? (
        <div className={`${style.main}`}>
          <div className={`${style.bar} bg-blue-500 shadow-md shadow-blue-500`}></div>
        </div>
      ) : (
        ""
      )}
      {children}
    </div>
  );
};
export default Loader;
