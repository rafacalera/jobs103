import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import CurriculoBody from "../components/curriculo/CurriculoBody";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/user/actions";
import axios from "axios";

export default () => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const menuController = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
      return;
    }
    axios
      .get(`/api/user/${currentUser.id}`)
      .then((response) => {
        dispatch(loginUser(response.data));
      })
      .catch((err) => {
        console.error("\nErro: " + err);
      });
  }, [currentUser, router]);

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
