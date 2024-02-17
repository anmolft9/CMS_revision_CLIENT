import React, { Children } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { SideMenu } from "../sideMenu/SideMenu";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* side bar */}
      <SideMenu />
      {/* main section */}
      <main style={{ minHeight: "72vh" }}>{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};
