import {create } from "zustand"



type SwitchStore = {
  isLogin: boolean;
  showPasswordStep: boolean;
  showUploadStep: boolean;

  showLogin: () => void;
  showSignUp: () => void;

  goToPasswordStep: () => void;
  backToBasicInfo: () => void;

  goToUploadStep: () => void;
  backToPasswordStep: () => void;
};
export const useSwitchStore = create<SwitchStore>((set) => ({
  isLogin: false,
  showPasswordStep: false,
  showUploadStep: false,

  showLogin: () => set({ isLogin: true }),
  showSignUp: () => set({ isLogin: false }),

  goToPasswordStep: () => set({ showPasswordStep: true }),
  backToBasicInfo: () => set({ showPasswordStep: false }),

  goToUploadStep: () => set({ showUploadStep: true }),
  backToPasswordStep: () => set({ showUploadStep: false }),
}));