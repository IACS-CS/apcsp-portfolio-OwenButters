import "@blaze/css";
import "../styles/styles.css";
// Import Pico CSS if needed
// import "@picocss/pico/css/pico.min.css";
import Aos from "aos";
import "aos/dist/aos.css"; // Correct import path
import anime from "animejs/lib/anime.es.js";
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

let animation = anime.timeline({
  duration: 1000,
  easing: "easeInOutSine",
  direction: "alternate",
  loop: true,
});

animation
  .add({
    targets: ".three",
    translateY: 2125,
    backgroundColor: "rgb(253, 126, 20)",
  })
  .add({
    targets: ".three",
    translateY: 1975,
    backgroundColor: "rgb(3, 240, 252)",
  })
  .add({
    targets: ".three",
    translateY: 1825,
    backgroundColor: "rgb(9, 255, 0)",
  })
  .add({
    targets: ".three",
    translateY: 1675,
    backgroundColor: "rgb(201, 30, 192)",
  })
  .add({
    targets: ".three",
    translateY: 1525,
    backgroundColor: "rgb(146, 49, 212)",
  })
  .add({
    targets: ".three",
    translateY: 1375,
    backgroundColor: "rgb(207, 31, 31)",
  })
  .add({
    targets: ".three",
    translateY: 1225,
    backgroundColor: "rgb(40, 167, 70)",
  })
  .add({
    targets: ".three",
    translateY: 1075,
    backgroundColor: "rgb(0, 123, 255)",
  })
  .add({
    targets: ".one",
    translateY: 2125,
    backgroundColor: "rgb(253, 126, 20)",
  })
  .add({
    targets: ".one",
    translateY: 1975,
    backgroundColor: "rgb(3, 240, 252)",
  })
  .add({
    targets: ".one",
    translateY: 1825,
    backgroundColor: "rgb(9, 255, 0)",
  })
  .add({
    targets: ".one",
    translateY: 1675,
    backgroundColor: "rgb(201, 30, 192)",
  })
  .add({
    targets: ".one",
    translateY: 1525,
    backgroundColor: "rgb(146, 49, 212)",
  })
  .add({
    targets: ".one",
    translateY: 1375,
    backgroundColor: "rgb(207, 31, 31)",
  })
  .add({
    targets: ".one",
    translateY: 1225,
    backgroundColor: "rgb(40, 167, 70)",
  })
  .add({
    targets: ".one",
    translateY: 1075,
    backgroundColor: "rgb(0, 123, 255)",
  })
  .add({
    targets: ".two",
    translateY: 2125,
    backgroundColor: "rgb(253, 126, 20)",
  })
  .add({
    targets: ".two",
    translateY: 1975,
    backgroundColor: "rgb(3, 240, 252)",
  })
  .add({
    targets: ".two",
    translateY: 1825,
    backgroundColor: "rgb(9, 255, 0)",
  })
  .add({
    targets: ".two",
    translateY: 1675,
    backgroundColor: "rgb(201, 30, 192)",
  })
  .add({
    targets: ".two",
    translateY: 1525,
    backgroundColor: "rgb(146, 49, 212)",
  })
  .add({
    targets: ".two",
    translateY: 1375,
    backgroundColor: "rgb(207, 31, 31)",
  })
  .add({
    targets: ".two",
    translateY: 1225,
    backgroundColor: "rgb(40, 167, 70)",
  })
  .add({
    targets: ".two",
    translateY: 1075,
    backgroundColor: "rgb(0, 123, 255)",
  });
  console.log(animation);
  console.log(anime);
  