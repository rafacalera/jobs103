import React from "react";
import Image from "next/image";
import sylvinho from "../../public/sylvinho fundo.png";
import styles from "../../styles/Main.module.css";
import Link from "next/link";

export default (props) => {
  return (
    <main>
      <div
        className={props.menuController.isOpen ? {} : styles.herro}
        style={props.menuController.isOpen ? { display: "none" } : {}}
      >
        <div>
          <h1>
            <span>Cadastre seu</span>{" "}
            <span>
              <Link
                href="/curriculo"
                style={{ color: "#2C4ECA", fontWeight: "700px" }}
              >
                Currículo
              </Link>
            </span>
            <span> aqui</span>
          </h1>
          <p>
            Seja você um estudante prestes a ingressar no mercado de trabalho ou
            alguém que está explorando diferentes carreiras, o Portal de
            Currículos Jobs-103 é o trampolim ideal para lançar-se em direção ao
            sucesso.
          </p>
        </div>
        <div>
          <Image
            className={styles.imgSylvinho}
            src={sylvinho}
            alt="Mascote Sylvinho"
            width={620}
            height={580}
          />
        </div>
      </div>
    </main>
  );
};
