"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
    { url: "about-us", label: "Про нас" },
    { url: "services", label: "Послуги" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Десктоп */}
            <nav className="hidden md:flex items-center gap-6">
                {LINKS.map((link) => (
                    <Link key={link.url} href={link.url}>
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Бургер */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden z-50 relative"
            >
                {isOpen ? <X /> : <Menu />}
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
                        className="fixed inset-0 flex justify-center items-center bg-lime-800 z-40"
                    >
                        {/* Кнопка закриття */}
                        <motion.button
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X />
                        </motion.button>

                        {/* Навігація */}
                        <motion.nav
                            className="md:hidden flex flex-col items-center gap-6"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
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
                                        className="block text-2xl text-white hover:opacity-80 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
