import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

const globalOptions = {
  mode: "auto",
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTelInput, globalOptions);
});
