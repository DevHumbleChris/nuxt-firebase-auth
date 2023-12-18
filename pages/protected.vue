<script setup>
const { user } = useFirebaseAuth();
definePageMeta({
  middleware: ["auth"],
});
useHead({
  titleTemplate: "%s - Protected",
});
</script>

<template>
  <div class="text-4xl mt-16 text-white text-center">Protected Route</div>
</template>
