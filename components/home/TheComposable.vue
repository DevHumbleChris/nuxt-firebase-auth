<script setup lang="ts">
import { VCodeBlock } from "@wdns/vue-code-block";

const codeSample = useState("codeSample", () => {
  return {
    sample: `
const { message, error } = await registerUser(email.value, password.value);
if (error) {
  // your actions
  return toast.error(error, {
    theme: "colored",
  });
}
// your actions
toast.success(message as string, {
  theme: "colored",
});
await navigateTo({ path: "/protected" });`,
    info: "This composable is used to register users during authentication. It takes two arguments message (string) and password (string).",
    name: "registerUser",
  };
});

const codeSampleToBeShown = useState(
  "codeSampleToBeShown",
  () => "registerUser"
);

const code = useState("code", () => {
  return {
    register: {
      sample: `
const { message, error } = await registerUser(email.value, password.value);
if (error) {
  // your actions
  return toast.error(error, {
    theme: "colored",
  });
}
// your actions
toast.success(message as string, {
  theme: "colored",
});
await navigateTo({ path: "/protected" });`,
      info: "This composable is used to register users during authentication. It takes two arguments message (string) and password (string).",
      name: "registerUser",
    },
    signinUser: {
      sample: `
const { message, error } = await signinUser(email.value, password.value);
if (error) {
  // your actions
  return toast.error(error, {
    theme: "colored",
  });
}
// your actions
toast.success(message as string, {
  theme: "colored",
});
await navigateTo({ path: "/protected" });`,
      info: "This composable is used to signin users during authentication. It takes two arguments message (string) and password (string).",
      name: "signinUser",
    },
    signinWith: {
      sample: `
const { message, error } = await signinWith(providerType);
if (error) {
  // your actions
  return toast.error(error, {
    theme: "colored",
  });
}
// your actions
toast.success(message as string, {
  theme: "colored",
});
await navigateTo({ path: "/protected" });`,
      info: "This composable is used to signin users through using Oauth Strategy during authentication. It takes one argument providerType of string type (github, google, facebook).",
      name: "signinWith",
    },
    user: {
      sample: `
const { user, signOutUser } = useFirebaseAuth();`,
      info: "The imported composable (user) is used to get the current user.",
      name: "user",
    },
    signOutUser: {
      sample: `
const { message, error } = await signOutUser();
if (error) {
  return toast.error(error, {
    theme: "colored",
  });
}
toast.success(message as string, {
  theme: "colored",
});
await navigateTo({ path: "/signin" });`,
      info: "This composable is used to sigout users.",
      name: "signOutUser",
    },
  };
});

const setCodeSampleToDisplay = (sampleName: string) => {
  switch (sampleName) {
    case "registerUser":
      codeSample.value = code.value.register;
      codeSampleToBeShown.value = "registerUser";
      break;
    case "signinUser":
      codeSample.value = code.value.signinUser;
      codeSampleToBeShown.value = "signinUser";
      break;
    case "signinWith":
      codeSample.value = code.value.signinWith;
      codeSampleToBeShown.value = "signinWith";
      break;
    case "user":
      codeSample.value = code.value.user;
      codeSampleToBeShown.value = "user";
      break;
    case "signOutUser":
      codeSample.value = code.value.signOutUser;
      codeSampleToBeShown.value = "signOutUser";
      break;
  }
};
</script>

<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 p-5 sm:p-10 gap-20">
    <div>
      <div
        class="relative flex flex-col px-8 py-12 space-y-4 overflow-hidden bg-[#161e33] hover:border hover:border-[#00dc82] rounded-xl"
      >
        <h2 class="text-[#00dc82] text-xl font-semibold">
          Auto Import Composables
        </h2>
        <p class="text-gray-300">
          Leverage the auto import composables thats comes in with the Nuxt
          Firebase Auth Starter template.
        </p>
        <p class="text-gray-300">
          Currently supported composables that you can use are as follows:
        </p>
        <div class="space-y-2">
          <button
            @click="setCodeSampleToDisplay('registerUser')"
            class="text-gray-100 flex items-center gap-2"
          >
            <Icon name="ph:tag-chevron-fill" class="w-4 h-auto" />
            <p
              class="font-semibold"
              :class="{
                'text-[#00dc82]': codeSampleToBeShown === 'registerUser',
              }"
            >
              registerUser.
            </p>
          </button>
          <button
            @click="setCodeSampleToDisplay('signinUser')"
            class="text-gray-100 flex items-center gap-2"
          >
            <Icon name="ph:tag-chevron-fill" class="w-4 h-auto" />
            <p
              class="font-semibold"
              :class="{
                'text-[#00dc82]': codeSampleToBeShown === 'signinUser',
              }"
            >
              signinUser.
            </p>
          </button>
          <button
            @click="setCodeSampleToDisplay('signinWith')"
            class="text-gray-100 flex items-center gap-2"
          >
            <Icon name="ph:tag-chevron-fill" class="w-4 h-auto" />
            <p
              class="font-semibold"
              :class="{
                'text-[#00dc82]': codeSampleToBeShown === 'signinWith',
              }"
            >
              signinWith.
            </p>
          </button>
          <button
            @click="setCodeSampleToDisplay('user')"
            class="text-gray-100 flex items-center gap-2"
          >
            <Icon name="ph:tag-chevron-fill" class="w-4 h-auto" />
            <p
              class="font-semibold"
              :class="{
                'text-[#00dc82]': codeSampleToBeShown === 'user',
              }"
            >
              user.
            </p>
          </button>
          <button
            @click="setCodeSampleToDisplay('signOutUser')"
            class="text-gray-100 flex items-center gap-2"
          >
            <Icon name="ph:tag-chevron-fill" class="w-4 h-auto" />
            <p
              class="font-semibold"
              :class="{
                'text-[#00dc82]': codeSampleToBeShown === 'signOutUser',
              }"
            >
              signOutUser.
            </p>
          </button>
        </div>
      </div>
    </div>
    <div class="text-white space-y-2">
      <p class="">{{ codeSample.info }}</p>
      <client-only>
        <div>
          <VCodeBlock
            :code="codeSample.sample"
            highlightjs
            lang="javascript"
            theme="github-dark"
            :label="codeSample.name + 'Code'"
          />
        </div>
      </client-only>
    </div>
  </section>
</template>
