<template>
  <section class="py-20" id="features">
    <div class="container max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold tracking-tight text-center text-[#00dc82]">
        Features
      </h2>
      <div
        class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
      >
        <div
          class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-[#161e33] hover:border-2 hover:border-[#00dc82] rounded-xl"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            class="p-3 text-white bg-[#00dc82] rounded-full"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <Icon name="mdi:firebase" class="w-8 h-auto" />
          </div>
          <h4 class="text-xl font-medium text-[#00dc82]">Firebase</h4>
          <p class="text-base text-center text-gray-300">
            Minimal setup required to integrate all Firebase services into your
            Nuxt.js application. Leverage the built-in composables.
          </p>
        </div>
        <div
          class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-[#161e33] hover:border-2 hover:border-[#00dc82] rounded-xl"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            class="p-3 text-white bg-[#00dc82] rounded-full"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <Icon name="emojione-monotone:pineapple" class="w-8 h-auto" />
          </div>
          <h4 class="text-xl font-medium text-[#00dc82]">Pinia</h4>
          <p class="text-base text-center text-gray-300">
            Pinia is a state management library. It provides an efficient way to
            manage app state, making it easier to build robust and maintainable
            Nuxt apps.
          </p>
        </div>
        <div
          class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-[#161e33] hover:border-2 hover:border-[#00dc82] rounded-xl"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            class="p-3 text-white bg-[#00dc82] rounded-full"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <Icon name="ic:twotone-local-fire-department" class="w-8 h-auto" />
          </div>
          <h4 class="text-xl font-medium text-[#00dc82]">Icons</h4>
          <p class="text-base text-center text-gray-300">
            Use any icon in your Nuxt application from your favourite icon set
            from the Icones library which houses over 100K+ icons and are free
            to use.
          </p>
        </div>
        <div
          class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-[#161e33] hover:border-2 hover:border-[#00dc82] rounded-xl"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            class="p-3 text-white bg-[#00dc82] rounded-full"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <Icon name="simple-icons:tailwindcss" class="w-8 h-auto" />
          </div>
          <h4 class="text-xl font-medium text-[#00dc82]">
            TailwindCSS + Shadcn
          </h4>
          <p class="text-base text-center text-gray-300">
            Use the collection of beautifully designed components provided by
            Shadcn. Copy and paste them into your apps easily.
          </p>
        </div>
        <div
          class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-[#161e33] hover:border-2 hover:border-[#00dc82] rounded-xl"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            class="p-3 text-white bg-[#00dc82] rounded-full"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <Icon
              name="streamline:image-photo-polaroid-photos-polaroid-picture-camera-photography-photo-pictures"
              class="w-8 h-auto"
            />
          </div>
          <h4 class="text-xl font-medium text-[#00dc82]">Nuxt OG for SEO</h4>
          <p class="text-base text-center text-gray-300">
            Added the Nuxt OG Image support to improve your SEO. To Ensure that
            your page looks great when shared on social media.
          </p>
        </div>
        <div
          class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-[#161e33] hover:border-2 hover:border-[#00dc82] rounded-xl"
          data-rounded="rounded-xl"
          data-rounded-max="rounded-full"
        >
          <div
            class="p-3 text-white bg-[#00dc82] rounded-full"
            data-primary="blue-500"
            data-rounded="rounded-full"
          >
            <Icon
              name="streamline:image-picture-landscape-1-photos-photo-landscape-picture-photography-camera-pictures"
              class="w-8 h-auto"
            />
          </div>
          <h4 class="text-xl font-medium text-[#00dc82]">Image Optimization</h4>
          <p class="text-base text-center text-gray-300">
            Leverage
            <span class="text-[#00dc82] font-semibold">&lt;nuxt-img&gt;</span>
            and
            <span class="text-[#00dc82] font-semibold"
              >&lt;nuxt-picture&gt;</span
            >
            to otpimize Optimize your images using Nuxt's image optimization
            feature. Ensure fast load times and a smooth user experience.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
