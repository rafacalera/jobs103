import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Head from "next/head";
import SignUp from "../components/SignUp";


export default props => {
    const [isOpen, setIsOpen] = useState(false);

    const menuController = {
        isOpen: isOpen, setIsOpen: setIsOpen
    }


    return (
        <>
            <Head>
                <title>Cadastro</title>
            </Head>

            <Navbar menuController={menuController} login={true} />
            <SignUp/>
        </>
    )
}