import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import CurriculoBody from "../components/curriculo/CurriculoBody";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuController = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <>
      <Head>
        <title>Currículo</title>
      </Head>
      <Navbar menuController={menuController} login={false} />
      <main style={{ display: "flex", justifyContent: "center" }}>
        <CurriculoBody />
      </main>
      <Footer menuController={menuController} />
    </>
  );
};
