import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                jost: ["var(--font-jost)", "sans-serif"],
                oldStandart: ["var(--font-old-standard)", "serif"],
                caveat: ["var(--font-caveat)", "cursive"],
            },
            colors: {
                primeGreen: "var(--prime-accent)",
                secondOrange: "var(--secondary-accent)",
                textWhite: "#CCCDC7",
            },
            backgroundColor: {
                primeGreen: "var(--prime-accent)",
                secondOrange: "var(--secondary-accent)",
            },
        },
    },
    plugins: [],
} satisfies Config;
