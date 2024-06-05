/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}", // This line ensures TailwindCSS scans all your JavaScript, TypeScript, and JSX files in the src folder
];
export const theme = {
  extend: {},
  colors: {
    'text': '#050315',
    'background': '#fbfbfe',
    'primary': '#2f27ce',
    'secondary': '#dedcff',
    'accent': '#433bff',
    'red':'#f74538'
   },
};
export const plugins = [];
