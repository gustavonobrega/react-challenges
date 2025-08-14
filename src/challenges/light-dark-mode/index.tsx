import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function LightDarkMode() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("challenge-theme");
    return savedTheme ? JSON.parse(savedTheme) : "light";
  });

  useEffect(() => {
    localStorage.setItem("challenge-theme", JSON.stringify(theme));
  }, [theme]);

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={theme === "dark" ? "dark" : undefined}>
      <div className="min-h-svh relative grid grid-rows-2 justify-center items-center bg-gray-100 dark:bg-gray-900 transition-all">
        <h1 className="flex flex-col text-center gap-4">
          <span className="text-4xl font-semibold text-gray-900 dark:text-white">
            The Light/Dark Mode Challenge
          </span>
          <span className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </h1>

        <button
          onClick={handleToggleTheme}
          className="absolute top-8 right-8 rounded-md cursor-pointer p-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg  ring ring-gray-900/5 hover:opacity-80"
        >
          {theme === "light" ? (
            <>
              <Moon /> <span className="sr-only">Dark mode</span>
            </>
          ) : (
            <>
              <Sun /> <span className="sr-only">Light mode</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
