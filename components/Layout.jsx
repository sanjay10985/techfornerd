import React from "react";
import Header from "./Header";

const Layout = ({ children, mode }) => {
  return (
    <div className="layout">
      <Header mode={mode} />
      {children}
    </div>
  );
};

export default Layout;
