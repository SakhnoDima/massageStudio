import React from "react";
import Link from "next/link";

import Image from "next/image";

import Navbar from "./Navbar";
import Container from "./core/Container";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full backdrop-blur-sm z-30">
            <Container className={"py-4 flex justify-between items-center"}>
                {/* <Image /> */}
                <Link
                    href="/"
                    className="font-caveat text-7xl text-secondOrange"
                >
                    Lemur
                </Link>
                <Navbar />
            </Container>
        </header>
    );
};

export default Header;
