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
                    <p>Seja você um estudante prestes a ingressar no mercado de trabalho ou alguém que está explorando diferentes carreiras, o Portal de Currículos Jobs-103 é o trampolim ideal para lançar-se em direção ao sucesso.</p>
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