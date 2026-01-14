import { useEffect, type RefObject } from "react";

export default function useOnClickOutside(
  ref: RefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const clickedElement = event.target as HTMLElement;

      if (ref.current && ref.current.contains(clickedElement)) {
        return;
      }

      callback();
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [ref, callback]);
}
