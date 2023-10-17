import React, { useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Main from "../components/principal/Main";
import Footer from "../components/Footer";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuController = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <>
      <Head>
        <title>Jobs-103</title>
      </Head>
      <header>
        <Navbar menuController={menuController} />
      </header>
      <main>
        <Main menuController={menuController} />
      </main>
      <footer>
        <Footer menuController={menuController} />
      </footer>
    </>
  );
};
