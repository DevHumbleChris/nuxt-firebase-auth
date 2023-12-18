import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
  type AuthProvider,
  type User,
} from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();

  const user = useState<User | null>("firebaseUser", () => null);

  const providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
    github: new GithubAuthProvider(),
  };

  interface IResponse {
    message: string | null;
    error: string | null;
  }

  const registerUser = async (
    email: string,
    password: string
  ): Promise<IResponse> => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        user.value = userCreds.user;
        return {
          message: "User Created Successfully!",
          error: null,
        };
      }
    } catch (error: unknown) {
      let errorResponse: IResponse = {
        message: null,
        error: null,
      };
      if (error instanceof Error) {
        errorResponse.error = error.message;
      }
      return errorResponse;
    }
  };

  const signinUser = async (
    email: string,
    password: string
  ): Promise<IResponse> => {
    try {
      const userCreds = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        user.value = userCreds.user;
        return {
          message: "User Created Successfully!",
          error: null,
        };
      }
    } catch (error: unknown) {
      let errorResponse: IResponse = {
        message: null,
        error: null,
      };
      if (error instanceof Error) {
        errorResponse.error = error.message;
      }
      return errorResponse;
    }
  };

  const signinWith = async (provider: string): Promise<IResponse> => {
    console.log(provider);
    const selectedProvider = useState<AuthProvider | null>(
      "selectedProvider",
      () => null
    );
    switch (provider) {
      case "google":
        selectedProvider.value = providers.google;
        break;
      case "facebook":
        selectedProvider.value = providers.facebook;
        break;
      case "github":
        selectedProvider.value = providers.github;
        break;
    }

    try {
      const userCreds = await signInWithPopup($auth, selectedProvider.value);
      if (userCreds) {
        user.value = userCreds.user;
        return {
          message: `Signin With ${provider} Successfully!`,
          error: null,
        };
      }
    } catch (error: unknown) {
      let errorResponse: IResponse = {
        message: null,
        error: null,
      };
      if (error instanceof Error) {
        errorResponse.error = error.message;
      }
      return errorResponse;
    }
  };

  const signOutUser = async () => {
    try {
      await $auth.signOut();
      user.value = null;
      return {
        message: `Signout Successfully!`,
        error: null,
      };
    } catch (error: unknown) {
      let errorResponse: IResponse = {
        message: null,
        error: null,
      };
      if (error instanceof Error) {
        errorResponse.error = error.message;
      }
      return errorResponse;
    }
  };

  return {
    registerUser,
    signinUser,
    signinWith,
    user,
    signOutUser,
  };
}
