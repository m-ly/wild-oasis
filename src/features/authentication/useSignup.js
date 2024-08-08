import { useMutation } from "@tanstack/react-query";
import { signUp as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: (user) => {
      toast.success(
        "User Created Successful, please verify the account from the user's email address"
      );
    },
    onError: (err) => {
      toast.error(err.message || "An error occurred during registration");
    },
  });

  return { signUp, isLoading };
}
