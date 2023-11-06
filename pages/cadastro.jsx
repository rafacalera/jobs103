import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Head from "next/head";
import SignUp from "../components/cadastro/SignUp";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Loading } from "../components/common/Loading";

export default () => {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [submitStage, setSubmitStage] = useState(false);
  const router = useRouter();
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  const submitController = {
    submitStage: submitStage,
    setSubmitStage: setSubmitStage,
  };

  const menuController = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      return;
    }
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Navbar menuController={menuController} login={true} />
      {loading ? (
        <Loading />
      ) : (
        <SignUp
          menuController={menuController}
          submitController={submitController}
        />
      )}
    </>
  );
};
