import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import DisplayCurriculo from "../components/curriculo/DisplayCurriculo";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/actions";
import { addCurriculum } from "../redux/curriculum/actions";
import getEffect from "../helpers/getEffect";
import { Loading } from "../components/common/Loading";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { currentCurriculum } = useSelector(
    (rootReducer) => rootReducer.curriculumReducer,
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const menuController = {
    isOpen: isOpen,
    setIsOpen: setIsOpen,
  };

  useEffect(() => {
    getEffect(
      currentUser,
      currentCurriculum,
      router,
      dispatch,
      addCurriculum,
      setLoading,
      logoutUser,
    );
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
        <Loading />
      )}
      <Footer menuController={menuController} />
    </>
  );
};
