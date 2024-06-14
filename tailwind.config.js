/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // This line ensures TailwindCSS scans all your JavaScript, TypeScript, and JSX files in the src folder
];
export const theme = {
  extend: {
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'Baloo 2',
      body: 'Baloo 2',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
  },
  colors: {
    // text: "#050315",
    // background: "#f2f2f2",
    // primary: "#2f27ce",
    // secondary: "#dedcff",
    // accent: "#433bff",
    // red: "#db6d2d",
    text: "#04040d",
    background: "#f2f3fb",
    primary: "#17428c",
    secondary: "#219cdc",
    accent: "#ececee",
    
  },
  
};
export const plugins = [];
