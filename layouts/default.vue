<script setup lang="ts">
import Footer from "~/components/global/Footer.vue";
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      property: "og:title",
      content: `Nuxt Firebase Auth Starter`,
    },
    {
      name: "description",
      content: "Starter Template For Nuxt Projects With Firebase Auth.",
    },
    {
      property: "og:description",
      content: "Starter Template For Nuxt Projects With Firebase Auth.",
    },
    {
      property: "og:url",
      content: "https://nuxt-firebase-auth-starter.vercel.app/",
    },
    {
      name: "twitter:title",
      content: "Starter Template For Nuxt Projects With Firebase Auth.",
    },
    {
      name: "twitter:description",
      content: "Starter Template For Nuxt Projects With Firebase Auth.",
    },
    {
      name: "twitter:site",
      content: "https://nuxt-firebase-auth-starter.vercel.app/",
    },
    {
      property: "og:image",
      content: "/icons/favicon-32x32.png",
    },
    {
      property: "og:image:type",
      content: "image/png",
    },
  ],
  title: `Nuxt Firebase Auth Starter`,
});

defineOgImageComponent("Nuxt", {
  headline: "Author: The Coding Montana",
  title: "Nuxt Firebase Auth Starter",
  description: "Starter Template For Nuxt Projects With Firebase Auth.",
});
</script>

<template>
  <main class="max-w-[90rem] mx-auto">
    <slot />
    <Footer />
  </main>
</template>
