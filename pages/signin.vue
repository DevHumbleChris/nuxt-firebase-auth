<script setup>
import Signin from "~/components/auth/Signin.vue";

definePageMeta({
  layout: "auth",
});
useHead({
  titleTemplate: "%s - Signin",
});
</script>

<template>
  <section class="mt-20 mx-4 sm:mx-0">
    <Signin />
  </section>
</template>
