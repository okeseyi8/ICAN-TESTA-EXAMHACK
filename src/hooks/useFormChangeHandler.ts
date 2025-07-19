import { useState } from "react";

const useFormChangeHandler = ():[Record<string, any>, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [formDetails, setFormDetails] = useState<Record<string, any>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDetails(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return [formDetails, handleChange];
};

export default useFormChangeHandler;
