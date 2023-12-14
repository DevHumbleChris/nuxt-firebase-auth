<script setup>
import Signin from "~/components/global/home/Signin.vue";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
</script>

<template>
  <section class="p-5 sm:p-10 text-white -mt-[4rem]">
    <div>
      <div
        class="max-w-7xl mx-auto space-y-4 py-10 sm:px-6 lg:px-8 text-center"
      >
        <Icon
          name="simple-icons:authelia"
          class="w-12 h-auto border border-white p-2 rounded-md"
        />
        <div class="space-y-2">
          <p
            class="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            <span class="text-[#00dc82]"> Auth </span>
            Components
          </p>
          <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-100">
            An optimized auth component experience thats also completely
            customizable. Choose the auth strategies you need — email, OAuth.
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 gap-10">
      <div
        class="self-start sm:col-span-2 bg-[#040823] rounded-md border border-gray-700"
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
            <div class="space-y-3">
              <h2>How will your users signin?</h2>
              <div class="space-y-3">
                <div
                  class="flex items-center text-sm justify-between bg-[#1e293b] p-2 rounded-md"
                >
                  <div class="flex items-center gap-4">
                    <Icon name="tabler:mail-plus" class="w-5 h-auto" />
                    <p>Email Address</p>
                  </div>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    ></div>
                    <span
                      class="ms-3 text-sm sr-only font-medium text-gray-900 dark:text-gray-300"
                      >Toggle me</span
                    >
                  </label>
                </div>
                <div
                  class="flex items-center text-sm justify-between bg-[#1e293b] p-2 rounded-md"
                >
                  <div class="flex items-center gap-4">
                    <Icon
                      name="material-symbols:add-call-rounded"
                      class="w-5 h-auto"
                    />
                    <p>Phone Number</p>
                  </div>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    ></div>
                    <span
                      class="ms-3 text-sm sr-only font-medium text-gray-900 dark:text-gray-300"
                      >Toggle me</span
                    >
                  </label>
                </div>
                <div
                  class="flex items-center text-sm justify-between bg-[#1e293b] p-2 rounded-md"
                >
                  <div class="flex items-center gap-4">
                    <Icon name="logos:google-icon" class="w-5 h-auto" />
                    <p>Google</p>
                  </div>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    ></div>
                    <span
                      class="ms-3 text-sm sr-only font-medium text-gray-900 dark:text-gray-300"
                      >Toggle me</span
                    >
                  </label>
                </div>
                <div
                  class="flex items-center text-sm justify-between bg-[#1e293b] p-2 rounded-md"
                >
                  <div class="flex items-center gap-4">
                    <Icon name="codicon:github-inverted" class="w-5 h-auto" />
                    <p>Github</p>
                  </div>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    ></div>
                    <span
                      class="ms-3 text-sm sr-only font-medium text-gray-900 dark:text-gray-300"
                      >Toggle me</span
                    >
                  </label>
                </div>
                <div
                  class="flex items-center text-sm justify-between bg-[#1e293b] p-2 rounded-md"
                >
                  <div class="flex items-center gap-4">
                    <Icon name="devicon:linkedin" class="w-5 h-auto" />
                    <p>Linkedin</p>
                  </div>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    ></div>
                    <span
                      class="ms-3 text-sm sr-only font-medium text-gray-900 dark:text-gray-300"
                      >Toggle me</span
                    >
                  </label>
                </div>
                <div
                  class="flex items-center text-sm justify-between bg-[#1e293b] p-2 rounded-md"
                >
                  <div class="flex items-center gap-4">
                    <Icon name="logos:facebook" class="w-5 h-auto" />
                    <p>Facebook</p>
                  </div>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                    ></div>
                    <span
                      class="ms-3 text-sm sr-only font-medium text-gray-900 dark:text-gray-300"
                      >Toggle me</span
                    >
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="sm:col-span-2 md:col-span-4">
        <div class="bg-[#0f172a] rounded-t-xl px-4 py-3 flex items-center">
          <div class="flex items-center gap-x-2">
            <div class="w-3 h-3 rounded-full bg-[#ed6559]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ed6559]"></div>
            <div class="w-3 h-3 rounded-full bg-[#ed6559]"></div>
          </div>
          <h1 class="mx-auto">
            Sign in to
            <span class="text-[#00dc82] font-semibold">My Application</span>
          </h1>
        </div>
        <div
          class="bg-gradient-to-r from-green-500 to-green-700 rounded-b-xl p-5 sm:p-10"
        >
          <Signin />
        </div>
      </div>
    </div>
  </section>
</template>
