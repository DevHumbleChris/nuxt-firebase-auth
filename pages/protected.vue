<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="text-4xl mt-16 text-white text-center">Protected Route</div>
</template>
