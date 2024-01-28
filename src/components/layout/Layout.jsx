import React from "react";
import "./layout.scss";
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
