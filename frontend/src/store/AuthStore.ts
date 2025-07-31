import { create } from "zustand";
import {
  loginUser,
  registerUser,
  uploadSignInImage,
} from "../api/auth/auth.api";

interface AuthStoreType {
  loading: boolean;
  token: string;
  login: (loginPayload: loginPayload) => Promise<void>;
  register: (signUpPayload: SignUp) => Promise<void>;
  uploadImage: (uploadFile: File) => Promise<void>;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  loading: false,
  token: localStorage.getItem("icanAuth") || "",
  login: async (loginPayload) => {
    set({ loading: true });
    try {
      const data = await loginUser(loginPayload);
      localStorage.setItem("icanAuth", data.token);
      set({ loading: false });
    } catch (error) {
      console.error(error);
    }
  },
  register: async (signUpPayload) => {
    try {
      const data = await registerUser(signUpPayload);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  },
  uploadImage: async (uploadFile: any) => {
    try {
      const data = await uploadSignInImage(uploadFile);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  },
}));
