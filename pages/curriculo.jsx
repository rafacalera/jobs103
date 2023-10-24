import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import DisplayCurriculo from "../components/curriculo/DisplayCurriculo";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/actions";
import { CircularProgress } from "@mui/material";

export default () => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [campos, setCampos] = useState({ undefined });
  const dispatch = useDispatch();
  const router = useRouter();

  function setarCampos(id, valor) {
    setCampos((prev) => ({
      ...prev,
      [id]: valor,
    }));
  }

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
      .get("/api/user/info", {
        headers: {
          "x-access-token": currentUser.token,
        },
      })
      .then((response) => {
        setCampos({
          primeiroNome: response.data ? response.data.nome.split(" ")[0] : "",
          sobrenome: response.data
            ? response.data.nome.split(" ").slice(1).join(" ")
            : "",
          estadoCivil: response.data ? response.data.estadoCivil : "",
          email: response.data ? response.data.email : "",
          telefone: response.data ? response.data.telefone : "",
          nascidoEm: response.data ? response.data.nascidoEm : "",
          cep: response.data ? response.data.cep : "",
          bairro: response.data ? response.data.bairro : "",
          logradouro: response.data ? response.data.logradouro : "",
          numero: response.data ? response.data.numero : "",
          cidade: response.data ? response.data.cidade : "",
          uf: response.data ? response.data.uf : "",
          complemento: response.data ? response.data.complemento : "",
        });
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.data === "Token expired") router.push("/login");
        dispatch(logoutUser());
        console.error(err);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Currículo</title>
      </Head>
      <Navbar menuController={menuController} login={false} />
      {!loading ? (
        <>
          <main style={{ display: "flex", justifyContent: "center" }}>
            <DisplayCurriculo setarCampos={setarCampos} campos={campos} />
          </main>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      )}
      <Footer menuController={menuController} />
    </>
  );
};
