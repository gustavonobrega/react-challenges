import { useRef, useState, useCallback } from "react";
import useOnClickOutside from "./useOnClickOutside";

export default function ClickOutside() {
  const [isOpen, setIsOpen] = useState(false);

  const popoverRef = useRef<HTMLDivElement | null>(null);
  
  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOnClickOutside(popoverRef, handleClickOutside);

  function handleTriggerClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex items-center justify-center min-h-svh bg-slate-200">
      <div
        className="flex flex-col items-center gap-4 relative"
        ref={popoverRef}
      >
        <button
          className="w-13 h-13 rounded-full border-2 border-white bg-white overflow-hidden cursor-pointer"
          aria-label="Toggle account dropdown"
          onClick={handleTriggerClick}
        >
          <img
            className="w-full"
            alt=""
            src="src/challenges/use-clickoutside/images/avatar.png"
          />
        </button>

        {isOpen && (
          <div
            className="bg-white rounded-lg text-nowrap shadow text-center
            absolute top-17 before:absolute before:bg-inherit before:w-4 before:h-4 
            before:rounded before:rotate-45 before:-translate-y-1.5 before:top-0 
            before:left-1/2 before:right-1/2 before:-translate-x-1/2"
          >
            <ul className="flex flex-col gap-1.5 px-5 py-3">
              <li>
                <a href="/account">My Account</a>
              </li>
              <li>
                <a href="/stats">Statistics</a>
              </li>
              <li>
                <a href="/logout">Log out</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
