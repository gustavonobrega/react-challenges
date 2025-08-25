import { X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

interface ModalProps {
  handleDismiss: () => void;
  children: ReactNode;
}

export default function Modal({ handleDismiss, children }: ModalProps) {
  const closeBtRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const currentlyFocusedElem = document.activeElement as HTMLButtonElement;

    closeBtRef.current?.focus();

    return () => {
      currentlyFocusedElem?.focus();
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <div className="fixed inset-0 grid place-items-center p-4">
      <div onClick={handleDismiss} className="absolute inset-0 bg-black/50" />

      <div
        role="dialog"
        aria-modal="true"
        className="relative p-8 rounded-lg bg-white shadow-lg"
      >
        <button
          onClick={handleDismiss}
          ref={closeBtRef}
          className="absolute top-0 right-0 p-2 text-white bg-transparent rounded cursor-pointer -translate-y-full outline-none focus:ring-2"
        >
          <X size={28} />
          <span className="sr-only">Dismiss modal</span>
        </button>
        {children}
      </div>
    </div>
  );
}
