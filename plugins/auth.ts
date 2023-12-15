export default defineNuxtPlugin(() => {
  addRouteMiddleware("auth", () => {
    const { $auth } = useNuxtApp();

    console.log($auth);

    if (!$auth?.currentUser?.uid) {
      return navigateTo("/");
    }
  });
});
