import React, { Children } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* side bar */}
      {/* main section */}
      <main>{children}</main>
      {/* footer */}
      <Footer />
    </div>
  );
};
