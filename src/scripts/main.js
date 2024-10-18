import "../styles/styles.css";
//import "@picoss/pico/css/pico.min.css";
import Aos from "aos";
import "aos/dist/aos.css"; //correct import path
// Add imports here



console.log("What?");
console.log("Hello world, from main.js!");
if (typeof window !== "undefined") {
  console.log("Hello world, from main.js!");
  Aos.init();
  // Put code that runs ONLY in the browser here -- this is most likely where
  // MOST of your code should go.
  //
  // If you see a SSR error, try moving your code here!
  console.log("Hello world, browser :-)");
}