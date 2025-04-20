import { useRef } from "react";

export function useId() {
  const idRef = useRef(`input-${Math.random().toString(16).slice(2)}`);

  return idRef.current;
}
