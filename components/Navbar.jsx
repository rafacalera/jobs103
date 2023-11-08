import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import curriculumImg from "../public/curriculum-icon.png";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/actions";
import { resetCurriculum } from "../redux/curriculum/actions";
import { useRouter } from "next/router";

export default (props) => {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <header>
        <nav
          className={
            props.menuController.isOpen
              ? `${styles.navbar} ${styles.active}`
              : styles.navbar
          }
        >
          <Link className={styles.logo} href="/">
            <Image
              src={curriculumImg}
              alt="curriculum-icon"
              width={32}
              height={32}
            />
            <span className={styles.jobs103}>Jobs-103</span>
          </Link>
          {!loading ? (
            <>
              <button
                className={styles.btnMobile}
                onClick={() => {
                  props.menuController.setIsOpen(!props.menuController.isOpen);
                }}
              >
                Menu
                <span className={styles.hamb} id="hamb"></span>
              </button>
              <div>
                <ul className={styles.navCenterLinks}>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/curriculo">Currículo</Link>
                  </li>
                </ul>
                <ul
                  style={props.login || currentUser ? { display: "none" } : {}}
                  className={styles.navRightButtons}
                >
                  <li>
                    <Link className={styles.aLogin} href="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      style={
                        props.menuController.isOpen
                          ? {}
                          : {
                              color: "#FFFFFF",
                              display: "flex",
                              padding: "17px 42px",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: "31.5px",
                              background: "#2C4ECA",
                            }
                      }
                      className={
                        props.menuController.isOpen
                          ? styles.btnCadastroMenu
                          : ""
                      }
                      href="/cadastro"
                    >
                      Cadastro
                    </Link>
                  </li>
                </ul>
                <Link
                  className={`${styles.aLogin} ${styles.logout}`}
                  onClick={() => {
                    dispatch(resetCurriculum());
                    dispatch(logoutUser());
                    router.push("/");
                  }}
                  style={currentUser ? {} : { display: "none" }}
                  href="/"
                >
                  Sair
                </Link>
              </div>
            </>
          ) : null}
        </nav>
      </header>
    </>
  );
};
