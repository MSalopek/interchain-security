const defaultTheme = require("tailwindcss/defaultTheme");

// Px to REM function (static base of 16)
const pxToRem = (dest) => 1 / (16 / dest);

// Config
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    // preflight: false, // avoid reset all docusaurus css
  },
  theme: {

    fontFamily: {
      inter: ["Inter", defaultTheme.fontFamily.sans],
      intervar: ['"Inter var"', defaultTheme.fontFamily.sans],
      jetbrain: ["JetBrains Mono", defaultTheme.fontFamily.mono],
    },


    extend: {
      fontSize: {
        0: "0",
        1: [`${pxToRem(10)}rem`],
        2: [`${pxToRem(13)}rem`],
        3: [`${pxToRem(16)}rem`],
        4: [`${pxToRem(21)}rem`],
        5: [`${pxToRem(28)}rem`],
        6: [`${pxToRem(32)}rem`],
        7: [`${pxToRem(38)}rem`],
        8: [`${pxToRem(51)}rem`],
        9: [`${pxToRem(56)}rem`],
        10: [`${pxToRem(76)}rem`],
      },
      borderRadius: {
        none: "0",
        xs: `${pxToRem(4)}rem`,
        s: `${pxToRem(8)}rem`,
        sm: `${pxToRem(10)}rem`,
        DEFAULT: `${pxToRem(16)}rem`,
        md: `${pxToRem(20)}rem`,
        lg: `${pxToRem(100)}rem`,
        circle: "100%",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        inherit: "inherit",
        gray: {
          0: "#FFFFFF",
          30: "rgba(0, 0, 0, 0.03)",
          1000: "#000000",
        },
        card: "#F7F7F7",
        border: "rgba(0, 0, 0, 0.07)",
        inactive: "rgba(0, 0, 0, 0.33)",
        inactiveLight: "rgba(255, 255, 255, 0.44)",
        muted: "#555555",
        mutedLight: "rgba(255, 255, 255, 0.67)",
        fg: "rgba(24, 24, 24, 0.67)",
        lightfg: "rgba(24, 24, 24, 0.67)",
        link: "#000000",
        linkHover: "#555555",
        docusaurusColorBase: "var(--ifm-font-color-base)",
        docusaurusBgColor: "var(--ifm-background-color)",
        docusaurusColorBorder: "var(--ifm-color-emphasis-200)",
      },
      spacing: {
        inherit: "inherit",
        auto: "auto",
        full: "100%",
        px: "1px",
        "1/2": "50%",
        "1/3": "33.333%",
        "2/3": "66.666%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        0: "0",
        1: ".25rem",
        2: `${pxToRem(6)}rem`,
        3: `${pxToRem(8)}rem`,
        3.5: `${pxToRem(10)}rem`,
        4: `${pxToRem(12)}rem`,
        5: `${pxToRem(16)}rem`,
        5.5: `${pxToRem(20)}rem`,
        6: `${pxToRem(24)}rem`,
        7: `${pxToRem(32)}rem`,
        7.5: `${pxToRem(40)}rem`,
        8: `${pxToRem(48)}rem`,
        8.5: `${pxToRem(52)}rem`,
        9: `${pxToRem(64)}rem`,
        9.5: "5rem",
        9.75: `${pxToRem(84)}rem`,
        10: `${pxToRem(96)}rem`,
        11: `${pxToRem(128)}rem`,
        12: `${pxToRem(144)}rem`,
        13: `${pxToRem(160)}rem`,
        14: `${pxToRem(192)}rem`,
        15: `${pxToRem(208)}rem`,
      },
    },
  },
  plugins: [],
};
