import "../styles/styles.css";
// Import Pico CSS if needed
// import "@picocss/pico/css/pico.min.css";
import Aos from "aos";
import "aos/dist/aos.css"; // Correct import path

import { defineConfig } from "astro/config";

export default defineConfig({
  base: "/apcsp-portfolio-OwenButters/", // Update to match your repository name
});
// Add imports here

console.log("What?");
console.log("Hello world, from main.js!");

if (typeof window !== "undefined") {
  console.log("Hello world, from main.js!");
  Aos.init();

  // Put code that runs ONLY in the browser here -- this is most likely where
  // MOST of your code should go.
  console.log("Hello world, browser :-)");
}