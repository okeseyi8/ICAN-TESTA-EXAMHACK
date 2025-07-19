import { type ReactNode } from "react";
declare global {
  type AuthLayoutProps = {
    children: ReactNode;
  };

  type SignUp = {
    name: string;
    password: string;
    icanNumber: string;
    email: string;
    phoneNumber: number;
  };
}
export {};
