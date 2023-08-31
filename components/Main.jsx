import React from "react"
import Image from 'next/image'
import sylvinho from '../assets/sylvinho fundo.png'
import styles from '../styles/Main.module.css'

export default props => {

    return (
        <>
            <div className={props.menuController.isOpen ? {} : styles.herro} style={props.menuController.isOpen ? { display: "none" } : {}}>
                <div>
                    <h1><span>Ache aqui seu</span> <span style={{ color: "#2C4ECA", fontWeight: "700px" }}>Emprego</span></h1>
                    <p>Find You New Job Today! New Job Postings Everyday just for you, browse the
                        job you want and apply
                        wherever you want</p>
                </div>
                <div>
                    <Image className={styles.imgSylvinho} src={sylvinho}
                        alt="Mascote Sylvinho"
                        width={620}
                        height={580}
                    />
                </div>
            </div >


        </>
    )
}