import { createUserWithEmailAndPassword, type User } from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();

  const user = useState<User | null>("fb_user", () => null);

  const registerUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const userCreds = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        user.value = userCreds.user;
        return true;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        // handle error
      }
      return false;
    }
    return false;
  };

  return {
    user,
    registerUser,
  };
}
