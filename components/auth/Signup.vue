<script setup lang="ts">
const email = useState("emailSignin", () => "");
const password = useState("passwordSignin", () => "");
const { signinUser, signinWith } = useFirebaseAuth();
import { toast } from "vue3-toastify";

const authStore = useAuthStore();

const isAuthenticating = useState("isAuthenticating", () => false);

const appName = computed(() => {
  return authStore?.appName;
});

const signinAuthProviders = computed(() => {
  return authStore?.signinAuthProviders;
});

const noOfCheckedProviders = computed(() => {
  return authStore?.noOfCheckedProviders;
});

const signInWithCredential = async () => {
  isAuthenticating.value = true;
  const { message, error } = await signinUser(email.value, password.value);
  if (error) {
    isAuthenticating.value = false;
    return toast.error(error, {
      theme: "colored",
    });
  }
  isAuthenticating.value = false;
  email.value = "";
  password.value = "";
  toast.success(message as string, {
    theme: "colored",
  });
  await navigateTo({ path: "/protected" });
};

const providerSignin = async (providerType: string) => {
  isAuthenticating.value = true;
  const { message, error } = await signinWith(providerType);
  if (error) {
    isAuthenticating.value = false;
    return toast.error(error, {
      theme: "colored",
    });
  }
  isAuthenticating.value = false;
  email.value = "";
  password.value = "";
  toast.success(message as string, {
    theme: "colored",
  });
  await navigateTo({ path: "/protected" });
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
        Sign up to unlock the best of
        {{ appName ? appName : "My Application" }}.
      </h2>
    </div>
    <!-- Socials -->
    <div class="space-y-3">
      <div v-for="authType in signinAuthProviders" :key="authType.id">
        <button
          v-if="authType.isChecked"
          @click="providerSignin(authType.type)"
          class="group w-full relative flex h-11 items-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-700 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100"
          :disabled="isAuthenticating"
        >
          <span
            class="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-200"
          >
            <Icon
              :name="
                isAuthenticating ? 'eos-icons:bubble-loading' : authType.icon
              "
              class="w-5 h-5 absolute left-0"
            />
            <span class="text-sm"
              >Continue with
              <span class="capitalize">{{ authType.type }}</span></span
            >
          </span>
        </button>
      </div>
    </div>
    <!-- End Of Socials -->
    <form @submit.prevent="signInWithCredential" class="space-y-3">
      <div class="space-y-2">
        <div v-if="noOfCheckedProviders > 0" class="flex items-center">
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
          class="flex w-full items-center gap-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          :disabled="isAuthenticating"
        >
          <Icon
            v-if="isAuthenticating"
            name="eos-icons:bubble-loading"
            class="w-5"
          />
          <span> Create Account </span>
        </button>
      </div>
    </form>
  </div>
</template>
