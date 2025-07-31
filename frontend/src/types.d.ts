import { type ReactNode } from "react";
declare global {
  type LayoutProps = {
    children: ReactNode;
  };

  type SignUp = {
    first_name: string;
    last_name: string;
    password: string;
    confirm_password: string;

    ican_number: string;
    email: string;
    phone_number: Number;
  };
  type Answer = {
  questionId: number;
  selectedOption: string; 
  flagged?: boolean;
  visited?: boolean;
};
type loginPayload = {
  email: string;
  password:string
}
type updateUserPayload = {
  avatar_url: string;
  phone_number?: string;
}
}


declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}

declare module '*.svg' {
  const src: string;
  export default src;
}

export {};