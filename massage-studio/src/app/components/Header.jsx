import React from "react";
import Link from "next/link";

import Image from "next/image";

import Navbar from "./Navbar";
import Container from "./core/Container";

const Header = () => {
    return (
        <header>
            <Container className={"py-4 flex justify-between items-center"}>
                {/* <Image /> */}
                <Link href="/">Логотип тут</Link>
                <Navbar />
            </Container>
        </header>
    );
};

export default Header;
