/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "default-black": "var(--default-black)",
        "gray-02": "var(--gray-02)",
        "gray-04": "var(--gray-04)",
        "gray-06": "var(--gray-06)",
        secondary: "var(--secondary)",
        specialbg: "var(--specialbg)",
        white: "var(--white)",
        backgroundsparent: "var(--backgroundsparent)",
        backgroundsprimary: "var(--backgroundsprimary)",
        fontsprimary: "var(--fontsprimary)",
        "fontsprimary-icon": "var(--fontsprimary-icon)",
        "fontsprimary-variant": "var(--fontsprimary-variant)",
        fontsstroke: "var(--fontsstroke)"
      },
      fontFamily: {
        "bold-16-24": "var(--bold-16-24-font-family)",
        "exbold-22-32": "var(--exbold-22-32-font-family)",
        "medium-12-16": "var(--medium-12-16-font-family)",
        "medium-14-20": "var(--medium-14-20-font-family)",
        "regular-12-16": "var(--regular-12-16-font-family)",
        "semibold-16-24": "var(--semibold-16-24-font-family)",
      },
      boxShadow: {
        "shadow-01": "var(--shadow-01)",
      },
    },
  },
  plugins: [],
}
