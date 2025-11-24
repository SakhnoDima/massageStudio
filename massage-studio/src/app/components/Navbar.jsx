"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, CircleX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import SocialItem from "./core/SocialSection.jsx";

const LINKS = [
    { url: "services", label: "Послуги" },
    { url: "about-us", label: "Про нас" },
    { url: "salon-rules", label: "Правил а салону" },
];

const socialLinks = [
    {
        url: "https://www.instagram.com/massage_studio_ua/",
        icon: "/icons/insta.svg",
    },
    {
        url: "https://t.me/ddd_ggg_ddd_ggg",
        icon: "/icons/telegram.svg",
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative flex">
            {/* Десктоп */}
            <nav className="hidden md:flex items-center gap-6">
                {LINKS.map((link) => (
                    <Link
                        key={link.url}
                        href={link.url}
                        className="font-oldStandart block text-2xl text-textWhite transition"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ">
                {isOpen ? <CircleX /> : <Menu color="#CCCDC7" />}
            </button>

            {/* Мобільне меню */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="h-[100vh] fixed inset-0 flex justify-center z-40 "
                    >
                        <div
                            className="absolute inset-0 bg-[url('/candles_1.JPG')] 
                        "
                        />
                        <div className="absolute inset-0 bg-[#0A0A0A]/70 backdrop-blur-sm" />

                        <motion.button
                            className="absolute top-4 right-4 cursor-pointer text-[#CCCDC7]"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <CircleX />
                        </motion.button>

                        <div className="z-10 flex flex-col justify-around">
                            {/* Navigation */}
                            <motion.nav
                                className="md:hidden flex flex-col items-center gap-6"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <Link
                                    href="/"
                                    className="font-caveat text-9xl text-secondOrange"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Lemur
                                </Link>
                                {LINKS.map((link, index) => (
                                    <motion.div
                                        key={link.url}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.1 * index,
                                            duration: 0.3,
                                        }}
                                    >
                                        <Link
                                            href={link.url}
                                            className="font-oldStandart block text-2xl text-textWhite transition"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>
                            {/* Social links */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <p className="pb-2 text-center text-textWhite">
                                    +380508551406
                                </p>
                                <div className="flex flex-row gap-4 justify-center">
                                    {socialLinks.map((link) => (
                                        <SocialItem
                                            key={link.url}
                                            url={link.url}
                                            icon={link.icon}
                                            alt={link.url}
                                            w={35}
                                            h={35}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
