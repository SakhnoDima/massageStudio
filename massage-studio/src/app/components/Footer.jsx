"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "./core/Container";
import Link from "next/link";
import SocialItem from "./core/SocialSection";
import SubTitle from "./core/SubTitle";

const socialLinks = [
    {
        url: "tel:+380508551406",
        icon: "/icons/tel_des.svg",
    },
    {
        url: "https://www.instagram.com/massage_studio_ua/",
        icon: "/icons/insta_des.svg",
    },
    {
        url: "https://t.me/ddd_ggg_ddd_ggg",
        icon: "/icons/telegram_des.svg",
    },
];
const pagesLinks = [
    { url: "services", label: "Послуги" },
    { url: "about-us", label: "Про нас" },
    { url: "salon-rules", label: "Правил а салону" },
];
const Footer = () => {
    const itemAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    };
    return (
        <section className="bg-[url('/massage_room_1.jpg')] bg-cover bg-center ">
            <Container
                className={
                    "bg-[#024440] opacity-[0.8] flex flex-col items-center justify-center pt-[50px] pb-5"
                }
            >
                <motion.div
                    className="md:px-[250px] flex flex-row w-full justify-around"
                    variants={itemAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <motion.div className="hidden md:block py-4">
                        {pagesLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url}
                                className="font-oldStandart block uppercase text-xl text-textWhite py-1 hover:text-secondOrange transition duration-500"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </motion.div>

                    {/* Desktop social */}
                    <motion.div
                        className="pt-4 pb-8 hidden md:block"
                        variants={itemAnimation}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="px-5 flex flex-row  gap-4 justify-center">
                            {socialLinks.map((link) => (
                                <SocialItem
                                    className={
                                        "hover:scale-110 transition-transform duration-500"
                                    }
                                    key={link.url}
                                    url={link.url}
                                    icon={link.icon}
                                    alt={link.url}
                                    w={45}
                                    h={45}
                                />
                            ))}
                        </div>
                    </motion.div>
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.div
                            className="py-4"
                            variants={itemAnimation}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <SubTitle className="text-center uppercase font-oldStandart block text-xl text-textWhite transition pb-3">
                                Графік роботи
                            </SubTitle>
                            <ul className="text-center font-oldStandart block text-lg text-textWhite transition">
                                <li>Понеділок - Неділя</li>
                                <li>З 9:00 до 19:00</li>
                                <li>(За попереднім записом)</li>
                            </ul>
                        </motion.div>

                        {/* Mob social */}
                        <motion.div
                            className="pt-4 pb-8 md:hidden"
                            variants={itemAnimation}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="px-5 flex flex-row  gap-4 justify-center">
                                {socialLinks.map((link) => (
                                    <SocialItem
                                        key={link.url}
                                        url={link.url}
                                        icon={link.icon}
                                        alt={link.url}
                                        w={45}
                                        h={45}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center w-full"
                    variants={itemAnimation}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <hr className="w-full border-textWhite/40 pb-4" />
                    <Link
                        href="/privacy"
                        className=" font-oldStandart block text-[12px] md:text-sm text-textWhite"
                    >
                        Політика конфіденційності
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
};

export default Footer;
