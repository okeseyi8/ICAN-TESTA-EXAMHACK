import { useState } from "react";
// import { useState } from 'react';

function useFormChangeHandler<T extends Record<string, any>>(initialState: T): [T, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [formDetails, setFormDetails] = useState<T>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return [formDetails, handleChange];
}

export default useFormChangeHandler;

