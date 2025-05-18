import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const layout = (
  { children }
) => {
  return (
    <>
      <Header />
      <main className="bg-[#121316] pb-24 lg:pb-30">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default layout;