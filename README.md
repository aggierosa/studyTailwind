♦ yarn create react-app react-tailwind-ts --template typescript
♦ yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
♦yarn tailwindcss init
♦yarn add @heroicons/react

♦ index.tsx:
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();

♦index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

♦tailwind.config.js:
module.exports = {
purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
darkMode: false
theme: {
extend: {},
},
variants: {
extend: {},
},
plugins: [],
};
