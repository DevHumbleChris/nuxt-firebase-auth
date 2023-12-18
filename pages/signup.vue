<script setup>
import Signup from "~/components/auth/Signup.vue";

definePageMeta({
  layout: "auth",
});
useHead({
  titleTemplate: "%s - Signup",
});
</script>

<template>
  <section class="mt-20 mx-4 sm:mx-0">
    <Signup />
  </section>
</template>
