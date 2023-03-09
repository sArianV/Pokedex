import { RefObject, useRef } from "react";

const useScroll = () => {
  const elRef: RefObject<HTMLInputElement> = useRef(null);
  const executeScroll = () =>
    elRef?.current?.scrollIntoView({ behavior: "smooth" });

  return [executeScroll, elRef] as [() => void, RefObject<HTMLInputElement>];
};

export default useScroll;
