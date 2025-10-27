import { useEffect, useRef, useState, type CSSProperties } from "react";

interface StarfieldButtonProps {
  letter: string;
  handleActivation: () => void;
}

export default function StarfieldButton({
  letter,
  handleActivation,
}: StarfieldButtonProps) {
  const [progress, setProgress] = useState(0);
  const [isHoldingKeyDown, setIsHoldingKeyDown] = useState(false);

  const holdStartTime = useRef<number | null>(null);

  useEffect(() => {
    if (isHoldingKeyDown) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === letter) {
        holdStartTime.current = Date.now();
        setIsHoldingKeyDown(true);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [letter, isHoldingKeyDown, handleActivation]);

  useEffect(() => {
    if (!isHoldingKeyDown) {
      return;
    }

    const intervalId = window.setInterval(() => {
      const timeElapsed = Date.now() - holdStartTime.current!;
      const newProgress = timeElapsed / 1000;
      setProgress(newProgress);

      if (newProgress >= 1) {
        handleActivation();
        window.clearInterval(intervalId);
      }
    }, 16);

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key !== letter) {
        return;
      }

      window.clearInterval(intervalId);
      setIsHoldingKeyDown(false);
      setProgress(0);
    }

    window.addEventListener("keyup", handleKeyUp);
  }, [letter, isHoldingKeyDown, handleActivation]);

  return (
    <button
      className="relative h-12 w-12 rounded-md text-lg bg-transparent border-2 
        text-inherit uppercase overflow-hidden cursor-pointer before:absolute before:inset-0 
        before:w-full before:h-full before:bg-zinc-700 before:opacity-30 before:scale-x-[var(--progress)] 
        before:origin-[left_center] data-[confirmed=true]:before:animate-flash"
      data-confirmed={progress >= 1}
      style={{ "--progress": progress } as CSSProperties}
      onClick={handleActivation}
    >
      <span className="grid place-content-center w-full h-full">{letter}</span>
      <span className="absolute left-2 right-2 bottom-2 bg-black h-[1px]" />
    </button>
  );
}

