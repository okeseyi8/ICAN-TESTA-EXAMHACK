import { type ReactNode } from "react";
declare global {
  type LayoutProps = {
    children: ReactNode;
  };

  type SignUp = {
    name: string;
    password: string;
    icanNumber: string;
    email: string;
    phoneNumber: number;
  };
  type Answer = {
  questionId: number;
  selectedOption: string; 
  flagged?: boolean;
  visited?: boolean;
};
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