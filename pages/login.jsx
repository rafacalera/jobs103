import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Head from "next/head";
import SignIn from "../components/login/SignIn";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuController = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Navbar menuController={menuController} login={true} />
      <SignIn menuController={menuController} />
    </>
  );
};
