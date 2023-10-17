import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Head from "next/head";
import SignUp from "../components/cadastro/SignUp";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitStage, setSubmitStage] = useState(false);

  const submitController = {
    submitStage: submitStage,
    setSubmitStage: setSubmitStage,
  };
  const menuController = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Navbar menuController={menuController} login={true} />
      <SignUp
        menuController={menuController}
        submitController={submitController}
      />
    </>
  );
};
