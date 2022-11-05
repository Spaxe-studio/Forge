import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Layout({ children }) {
  return (
    <div className="bg-home">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
