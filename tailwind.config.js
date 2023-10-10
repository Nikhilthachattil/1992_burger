/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dancing: ["Raleway", "sans-serif"],
        fuggles: ["Fuggles", "cursive"],
        Satisfy: ["Satisfy", "cursive"],
        Poppins: ["Mochiy Pop One", "sans-serif"],
        burger: ["Burger Free", "sans-serif"],
      },
    },

    colors: {
      dgreen: "#3b3833",
      dcream: "#fff8f0",
      lgreen: "#fffe03",
      mgreen: "#387654",
      dorange: "#ec8922",
      dblack: "#000000",
      claret: "#811638",
      ddblue: "#060606",
    },
    screens: {
      xs: "550px",
      sm: "650px",
      md: "857px",
      lg: "1050px",
      xl: "1300px",
    },
    animation: {
      "infinite-scroll": "infinite-scroll 25s linear infinite",
      "bounce-animation": "bounce 10s infinite ",
      "spin-animation": "spin 10s linear infinite ",
      wiggle: "wiggle 10s infinite ",
      seesaw: "seesaw 5s linear infinite",
    },
    keyframes: {
      "infinite-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
      bounce: {
        from: { transform: "translateY(-50%)" },
        to: { transform: "translateY(0)" },
      },
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      wiggle: {
        "0%, 100%": { transform: "scale(0.8) rotate(-7deg)" },
        "50%": { transform: "scale(0.5) rotate(3deg)" },
      },
      seesaw: {
        " 0%": {
          transform: "rotate(5deg)",
        },

        "25%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(-5deg)",
        },

        " 75%": {
          transform: "rotate(0deg)",
        },

        "100%": {
          transform: "rotate(5deg)",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
