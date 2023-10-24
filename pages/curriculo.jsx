import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import DisplayCurriculo from "../components/curriculo/DisplayCurriculo";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/actions";
import { addCurriculum, logoutCurriculum } from "../redux/curriculum/actions";
import { CircularProgress } from "@mui/material";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const router = useRouter();

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
        dispatch(addCurriculum({ basicInfos: response.data }));
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.data === "Token expired") router.push("/login");
        dispatch(logoutUser());
        dispatch(logoutCurriculum());
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
            <DisplayCurriculo />
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
