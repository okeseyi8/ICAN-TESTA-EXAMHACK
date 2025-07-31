import { create } from "zustand";

import toast from "react-hot-toast";

import {
  loginUser,
  registerUser,
  updateUserImage,
  uploadSignInImage,
} from "../api/auth/auth.api";

interface User {
  avatar_url: string | null;
  created_at: string;
  email: string;
  first_name: string | null;
  ican_number: string;
  id: string;
  is_active: boolean;
  is_admin: boolean;
  is_verified: boolean;
  last_name: string | null;
  phone_number: string | null;
}

interface AuthStoreType {
  loginLoading: boolean;
  uploadLoading: boolean;
  registerLoading: boolean;
  token: string;
  imageUrl: string;
  user: User | null;
  login: (loginPayload: loginPayload) => Promise<void>;
  register: (signUpPayload: SignUp) => Promise<void>;
  uploadImage: (uploadFile: File) => Promise<void>;
  updateProfileImage: (details: updateUserPayload, id: string) => Promise<void>;
  hydrate: () => void;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
  loginLoading: false,
  uploadLoading: false,
  registerLoading: false,
  imageUrl: "",
  user: JSON.parse(localStorage.getItem("icanUser") ?? "null") || null,

  token: localStorage.getItem("icanAuth") || "",

  login: async (loginPayload) => {
    set({ loginLoading: true });
    try {
      const res = await loginUser(loginPayload);
      set({ user: res.data.user, loginLoading: false });
      localStorage.setItem("icanUser", JSON.stringify(res.data.user));
      toast.success("Login Successful");
    } catch (err: any) {
      console.error(err);
      const errorMsg =
        err?.response?.data?.errors?.[0]?.ctx?.error ||
        err?.response?.data?.message ||
        "Internal Server Error";

      toast.error(errorMsg);
      throw new Error(errorMsg)

    }finally{
      set({loginLoading: false})
    }
  },
  register: async (signUpPayload) => {
    set({ registerLoading: true });
    try {
      const data = await registerUser(signUpPayload);
      set({ user: data.data.user });
      localStorage.setItem("icanUser", JSON.stringify(data.data.user));
      set({token: data.data.token})
      localStorage.setItem("icanAuth", data.data.access_token );
      toast.success("Registration Successful");
      return data;
    } catch (err: any) {
      console.error("Registration error:", err);

      const errorMsg =
        err?.response?.data?.errors?.[0]?.ctx?.error ||
        err?.response?.data?.message ||
        "Registration failed. Please try again.";

      toast.error(errorMsg);
      throw new Error(errorMsg);
    } finally {
      set({ registerLoading: false });
    }
  },

  uploadImage: async (file) => {
    set({ uploadLoading: true });
    try {
      const data = await uploadSignInImage(file);
      const URL = data.url;
      set({ imageUrl: URL });
      localStorage.setItem("imageUrlObj", JSON.stringify(data));
      toast.success("Upload Image Successfully");
    } catch (error) {
      console.error(error);
    } finally {
      set({ uploadLoading: false });
    }
  },
  updateProfileImage: async (details: updateUserPayload, id: string) => {
    set({ registerLoading: true });
    try {
      const data = await updateUserImage(details, id);
      toast.success("Image Upload Successful");
      console.log(data);
    } catch (err: any) {
      console.error(err);
      const errorMsg =
        err?.response?.data?.errors?.[0]?.ctx?.error ||
        err?.response?.data?.message ||
        "Internal Server Error";

      toast.error(errorMsg);
      throw new Error(errorMsg);
    } finally {
      set({ registerLoading: false });
    }
  },
  hydrate: () => {
    const user = JSON.parse(localStorage.getItem("icanUser") || "null");
    if (user) {
      set({ user });
    }
  },
}));
