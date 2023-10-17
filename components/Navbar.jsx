import React from "react";
import Image from "next/image";
import curriculumImg from "../assets/curriculum-icon.png";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

export default (props) => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);

  return (
    <header>
      <nav
        className={
          props.menuController.isOpen
            ? `${styles.navbar} ${styles.active}`
            : styles.navbar
        }
      >
        <a className={styles.logo} href="/">
          <Image
            src={curriculumImg}
            alt="curriculum-icon"
            width={32}
            height={32}
          />
          <span className={styles.jobs103}>Jobs-103</span>
        </a>
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
              <a href="#">Home</a>
            </li>
            <li>
              <a
                style={
                  props.menuController.isOpen
                    ? {}
                    : { color: "#2C4ECA", fontWeight: "700" }
                }
                href="#"
              >
                Vagas
              </a>
            </li>
            <li>
              <a href="/curriculo">Currículo</a>
            </li>
          </ul>
          <ul
            style={props.login || currentUser ? { display: "none" } : {}}
            className={styles.navRightButtons}
          >
            <li>
              <a className={styles.aLogin} href="/login">
                Login
              </a>
            </li>
            <li>
              <a
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
                  props.menuController.isOpen ? styles.btnCadastroMenu : ""
                }
                href="/cadastro"
              >
                Cadastro
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
