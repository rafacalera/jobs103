import React from "react";
import Image from "next/image";

import curriculumImg from "../assets/curriculum-icon.png";
import phoneCallImg from "../assets/phone-call.png";
import facebookImg from "../assets/facebook.png";
import instagramImg from "../assets/instagram.png";
import oldPhoneImg from "../assets/old-typical-phone.png";

import styles from "../styles/Footer.module.css";

export default (props) => {
  return (
    <footer>
      <div
        className={
          props.menuController.isOpen ? styles.footerNone : styles.footer
        }
      >
        <div>
          <Image
            src={curriculumImg}
            alt="curriculum-icon"
            width={48}
            height={48}
          />
          <span
            style={{ fontSize: "48px", color: "#2C4ECA", fontWeight: "700" }}
          >
            Jobs-103
          </span>
        </div>
        <span className={styles.spanDisc}>
          <p>Site destinado ao cadastro de Currículos da ETEC-103</p>
          <span>© 2023 Jobs-103 - All rights reserved.</span>
        </span>
        <div>
          <ul>
            <li>
              <a href="https://wa.me/5516997861279" target="_blank">
                <Image
                  src={phoneCallImg}
                  alt="Phone Image"
                  width={24}
                  height={24}
                />
                <span>WhatsApp</span>
                <span>16 99786-1279</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/etecsmc/" target="_blank">
                <Image
                  src={facebookImg}
                  alt="Facebook Icon"
                  width={24}
                  height={24}
                />
                <span>Facebook</span>
                <span>/etecsmc</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/etecsylviodemattos/"
                target="_blank"
              >
                <Image
                  src={instagramImg}
                  alt="Instagram Icon"
                  width={24}
                  height={24}
                />
                <span>Instagram</span>
                <span>@etecsylviodemattos</span>
              </a>
            </li>
            <li>
              <a href="tel:1633821226">
                <Image
                  src={oldPhoneImg}
                  alt="Old Phone Image"
                  width={24}
                  height={24}
                />
                <span>Telefone</span>
                <span>3382-1226</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
