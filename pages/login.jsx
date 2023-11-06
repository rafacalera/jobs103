import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Head from "next/head";
import SignIn from "../components/login/SignIn";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Loading } from "../components/common/Loading";

export default () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const [loading, setLoading] = useState(true);

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
        <title>Login</title>
      </Head>

      <Navbar menuController={menuController} login={true} />
      {loading ? <Loading /> : <SignIn menuController={menuController} />}
    </>
  );
};
