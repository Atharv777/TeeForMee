module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "0%": { transform: "translateX(-20px)" },
                    "25%": { transform: "translateX(20px)" },
                    "50%": { transform: "translateX(-10px)" },
                    "75%": { transform: "translateX(10px)" },
                    "100%": { transform: "translateX(0px)" }
                },
                gradientAnim: {
                    "0%": { backgroundPosition: "left" },
                    "50%": { backgroundPosition: "right" },
                    "100%": { backgroundPosition: "left" }
                }
            },
            animation: {
                wiggle: "wiggle 0.33s ease-in-out",
                gradientAnim: "gradientAnim 5s infinite",
            }
        },
    },
    plugins: [],
}