export interface AuthFormState {
  status: "idle" | "error" | "success";
  message?: string;
}

export const initialAuthState: AuthFormState = { status: "idle" };
