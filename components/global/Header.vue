<script setup lang="ts">
const showMenu = useState("showMenu", () => false);
</script>

<template>
  <section
    class="sticky top-0 left-0 right-0 w-full px-6 pb-12 antialiased bg-[#0c0129] z-40 shadow-md"
  >
    <div class="mx-auto max-w-7xl">
      <nav class="relative z-50 h-12 select-none">
        <div
          class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0"
        >
          <div class="flex items-center">
            <NuxtLink
              to="/"
              class="flex items-center py-4 space-x-2 font-extrabold text-white md:py-0"
            >
              <Icon name="logos:firebase" class="w-6 h-auto" />

              <span>Nuxt Firebase Auth</span>
            </NuxtLink>
          </div>
          <div
            class="absolute top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex"
            :class="{ 'flex fixed': showMenu, hidden: !showMenu }"
          >
            <div
              class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row"
            >
              <a
                href="#_"
                class="flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
              >
                <svg
                  class="w-auto h-5"
                  viewBox="0 0 355 99"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M119.1 87V66.4h19.8c34.3 0 34.2-49.5 0-49.5-11 0-22 .1-33 .1v70h13.2zm19.8-32.7h-19.8V29.5h19.8c16.8 0 16.9 24.8 0 24.8zm32.6-30.5c0 9.5 14.4 9.5 14.4 0s-14.4-9.5-14.4 0zM184.8 87V37.5h-12.2V87h12.2zm22.8 0V61.8c0-7.5 5.1-13.8 12.6-13.8 7.8 0 11.9 5.7 11.9 13.2V87h12.2V61.1c0-15.5-9.3-24.2-20.9-24.2-6.2 0-11.2 2.5-16.2 7.4l-.8-6.7h-10.9V87h12.1zm72.1 1.3c7.5 0 16-2.6 21.2-8l-7.8-7.7c-2.8 2.9-8.7 4.6-13.2 4.6-8.6 0-13.9-4.4-14.7-10.5h38.5c1.9-20.3-8.4-30.5-24.9-30.5-16 0-26.2 10.8-26.2 25.8 0 15.8 10.1 26.3 27.1 26.3zM292 56.6h-26.6c1.8-6.4 7.2-9.6 13.8-9.6 7 0 12 3.2 12.8 9.6zm41.2 32.1c14.1 0 21.2-7.5 21.2-16.2 0-13.1-11.8-15.2-21.1-15.8-6.3-.4-9.2-2.2-9.2-5.4 0-3.1 3.2-4.9 9-4.9 4.7 0 8.7 1.1 12.2 4.4l6.8-8c-5.7-5-11.5-6.5-19.2-6.5-9 0-20.8 4-20.8 15.4 0 11.2 11.1 14.6 20.4 15.3 7 .4 9.8 1.8 9.8 5.2 0 3.6-4.3 6-8.9 5.9-5.5-.1-13.5-3-17-6.9l-6 8.7c7.2 7.5 15 8.8 22.8 8.8z"
                      id="a"
                    ></path>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <g fill="currentColor">
                      <path d="M19.742 49h28.516L68 83H0l19.742-34z"></path>
                      <path
                        d="M26 69h14v30H26V69zM4 50L33.127 0 63 50H4z"
                      ></path>
                    </g>
                    <g fill-rule="nonzero">
                      <use fill="currentColor" xlink:href="#a"></use>
                      <use fill="currentColor" xlink:href="#a"></use>
                    </g>
                  </g>
                </svg>
              </a>
              <div
                class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center"
              >
                <NuxtLink
                  to="#components"
                  class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-white md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center hover:text-[#00dc82]"
                  >Components</NuxtLink
                >
                <NuxtLink
                  to="#features"
                  class="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 text-white lg:mx-3 md:text-center hover:text-[#00dc82]"
                  >Features</NuxtLink
                >
              </div>
              <div
                class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0"
              >
                <NuxtLink
                  to="https://x.com/AmChrisKE"
                  target="_blank"
                  class="flex items gap-2 w-full px-6 py-2 mr-0 text-white md:px-3 md:mr-2 lg:mr-3 md:w-auto hover:text-[#00dc82]"
                >
                  <svg
                    class="flex-shrink-0 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    />
                  </svg>
                </NuxtLink>
                <NuxtLink
                  to="https://github.com/DevHumbleChris/nuxt-firebase-auth"
                  target="_blank"
                  class="flex items gap-2 w-full text-sm font-medium leading-4 text-white bg-gray-900 md:w-auto md:rounded-full focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-gray-800 hover:text-[#00dc82]"
                  ><svg
                    class="flex-shrink-0 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>
