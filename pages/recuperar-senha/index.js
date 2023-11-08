import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Loading } from "../../components/common/Loading";
import { RecuperarSenhaForm } from "../../components/recuperar-senha/RecuperarSenhaForm";

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
        <title>Recuperar Senha</title>
      </Head>

      <Navbar menuController={menuController} login={true} />
      {loading ? (
        <Loading />
      ) : (
        <RecuperarSenhaForm menuController={menuController} />
      )}
    </>
  );
};
