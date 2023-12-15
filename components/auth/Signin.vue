<script setup lang="ts">
const email = useState("emailSignin", () => "");
const password = useState("passwordSignin", () => "");
const { signinUser, signinWith } = useFirebaseAuth();
import { toast } from "vue3-toastify";

const signInWithCredential = async () => {
  const { message, error } = await signinUser(email.value, password.value);
  if (error) {
    toast.error(error, {
      theme: "colored",
    });
  }
};

const providerSignin = async (providerType: string) => {
  const { message, error } = await signinWith(providerType);
  if (error) {
    toast.error(error, {
      theme: "colored",
    });
  }
};
</script>

<template>
  <div class="bg-white max-w-md mx-auto rounded-3xl p-5 sm:p-10 space-y-5">
    <div class="space-y-4 flex flex-col sm:flex-row sm:items-center sm:gap-5">
      <img
        src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
        loading="lazy"
        class="w-10"
        alt="tailus logo"
      />
      <h2 class="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
        Sign in to unlock the best of My Application.
      </h2>
    </div>
    <!-- Socials -->
    <div>
      <button
        @click="providerSignin('github')"
        class="group w-full relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-700 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100"
      >
        <span
          class="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="w-5 h-5 absolute left-0"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
          <span class="text-sm">Continue with Github</span>
        </span>
      </button>
    </div>
    <!-- End Of Socials -->
    <form @submit.prevent="signInWithCredential" class="space-y-3">
      <div class="space-y-2">
        <div class="flex items-center">
          <div class="w-full h-[0.05rem] bg-gray-400 rounded-xl"></div>
          <p class="text-black px-3">Or</p>
          <div class="w-full h-[0.05rem] bg-gray-400 rounded-xl"></div>
        </div>
      </div>
      <div class="space-y-2">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              v-model="email"
              required
              class="block w-full rounded-md border-0 py-2 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="password"
              v-model="password"
              required
              class="block w-full rounded-md border-0 py-2 px-3 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>
