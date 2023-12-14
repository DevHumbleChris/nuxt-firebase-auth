import "preline/preline";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    HSStaticMethods.autoInit();
  });
});
