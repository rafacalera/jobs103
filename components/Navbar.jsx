import React, { useState } from "react"
import Image from 'next/image'
import curriculumImg from '../assets/curriculum-icon.png'
import styles from '../styles/Navbar.module.css'

export default () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={isOpen ? `${styles.navbar} ${styles.active}` : styles.navbar}>
                <a className={styles.logo} href="#">
                    <Image src={curriculumImg}
                        alt="curriculum-icon"
                        width={32}
                        height={32}
                    />
                    <span className={styles.jobs103}>Jobs-103</span>
                </a>
                <button className={styles.btnMobile} onClick={() => { setIsOpen(!isOpen) }}>Menu
                    <span className={styles.hamb} id="hamb"></span>
                </button>
                <div>
                    <ul className={styles.navCenterLinks}>
                        <li><a href="#">Home</a></li>
                        <li><a style={isOpen ? {} : { color: "#2C4ECA", fontWeight: "700" }} href="#">Vagas</a></li>
                        <li><a href="#">Currículo</a></li>
                    </ul>
                    <ul className={styles.navRightButtons}>
                        <li><a className={styles.aLogin} href="#">Login</a></li>
                        <li><a style={isOpen ? {} :
                            {
                                color: "#FFFFFF",
                                display: "flex",
                                padding: "17px 42px",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "31.5px",
                                background: "#2C4ECA"
                            }
                        } className={isOpen ? styles.btnCadastroMenu : ''} href="#">Cadastro</a></li>
                    </ul>
                </div>
            </nav >
        </>
    )
}