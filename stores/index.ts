import { type ISigninProviders } from "~/types/index";

export const useAuthStore = defineStore("authStore", () => {
  const signinAuthProviders = useState<ISigninProviders[]>(
    "authStoreProviders",
    () => {
      return [
        { id: 1, type: "github", isChecked: false, icon: "bi:github" },
        { id: 2, type: "google", isChecked: true, icon: "logos:google-icon" },
        { id: 3, type: "facebook", isChecked: false, icon: "logos:facebook" },
      ];
    }
  );

  const appName = useState("appNameOnStore", () => "");
  const isUseEmailAddress = useState("isUseEmailAddress", () => true);

  const setIsUseEmailAddress = (payload: boolean) => {
    isUseEmailAddress.value = payload;
  };

  const setStoreAppName = (payload: string) => {
    appName.value = payload;
  };

  const noOfCheckedProviders = computed(() => {
    let totalCheckedAuths = 0;
    for (let x = 0; x < signinAuthProviders.value.length; x++) {
      if (signinAuthProviders.value[x].isChecked) {
        totalCheckedAuths += 1;
      }
    }
    return totalCheckedAuths;
  });

  const setProviderAuths = (payload: ISigninProviders[]) => {
    signinAuthProviders.value = payload;
  };
  return {
    signinAuthProviders,
    setProviderAuths,
    noOfCheckedProviders,
    setStoreAppName,
    appName,
    isUseEmailAddress,
    setIsUseEmailAddress,
  };
});
