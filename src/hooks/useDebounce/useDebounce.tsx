import { useEffect } from "react";

const useDebounce = (
  value: string,
  callback: (input: string) => void,
  delay: number
) => {
 
  
  useEffect(() => {
    if (!callback) return;
    const timer = setTimeout(() => {      
      callback(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, callback, delay]);
};

export default useDebounce;
