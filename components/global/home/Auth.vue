<script setup>
import Signin from "~/components/global/home/Signin.vue";
</script>

<template>
  <section class="p-10 text-white -mt-[4rem]">
    <div>
      <div
        class="max-w-7xl mx-auto space-y-2 py-16 px-10 sm:px-6 lg:px-8 sm:text-center"
      >
        <Icon
          name="simple-icons:authelia"
          class="w-12 h-auto border border-white p-2 rounded-md"
        />
        <p
          class="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          <span class="text-[#00dc82]"> Auth </span>
          Components
        </p>
        <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-100">
          An optimized auth component experience thats also completely
          customizable. Choose the auth strategies you need — passwords, email
          codes or links, OAuth and more.
        </p>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-10">
      <div
        class="self-start col-span-2 bg-[#040823] rounded-md border border-gray-700"
      >
        <div class="flex items-center p-2 gap-3 bg-[#0f172a]">
          <button
            class="flex items-center gap-x-1 text-xs font-medium px-2 py-1 rounded-md bg-[#1e293b]"
          >
            <Icon name="vscode-icons:file-type-nuxt" class="w-5 h-auto" />
            <span>Signin.vue</span>
          </button>
          <button
            class="flex items-center gap-x-1 text-xs font-medium px-2 py-1 rounded-md hover:bg-[#1e293b]"
          >
            <Icon name="vscode-icons:file-type-nuxt" class="w-5 h-auto" />
            <span>Signup.vue</span>
          </button>
        </div>
        <div class="p-3 space-y-4">
          <h2>
            Let's build your
            <span class="text-[#00dc82] font-semibold">&lt;SignIn /&gt;</span>
          </h2>
          <form action="" class="px-2 space-y-3">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-white"
                >Application Name</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="My application"
                />
              </div>
            </div>
            <div>
              <h2>How will your users signin?</h2>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="hs-basic-usage"
                    class="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
                  />
                  <label for="hs-basic-usage" class="sr-only">switch</label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-span-4">
        <div class="bg-[#0f172a] rounded-t-md px-4 py-3 flex items-center">
          <div class="flex items-center gap-x-2">
            <div class="w-3 h-3 rounded-full bg-[#ed6559]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ed6559]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ed6559]"></div>
          </div>
          <h1 class="mx-auto">
            Sign in to
            <span class="text-[#00dc82] font-semibold"
              >Christopher Odhiambo</span
            >
          </h1>
        </div>
        <div
          class="bg-gradient-to-r from-green-500 to-green-700 rounded-b-md p-10"
        >
          <Signin />
        </div>
      </div>
    </div>
  </section>
</template>
