import AOS from "aos";
import "aos/dist/aos.css";

// https://michalsnik.github.io/aos/ DEMO

export default defineNuxtPlugin((nuxtApp) => {
  AOS.init({ duration: 1500 });
});
