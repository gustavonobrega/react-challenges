import { useEffect, useState } from "react";
import { range } from "../../utils/range";

export default function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const { clientHeight, scrollHeight, scrollTop } =
        document.documentElement;

      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;

      setScrollPercentage(scrolled);
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 h-18 flex items-center justify-center bg-gray-900 border-b-8 border-gray-700">
        <h2 className="text-white text-xl font-semibold">
          Scroll Indicator Challenge
        </h2>
        <span
          className="absolute -bottom-2 h-2 left-0 bg-gray-500"
          style={{ width: `${scrollPercentage}%` }}
        />
      </header>

      <div className="text-center space-y-2 p-4">
        {range(40).map((item) => (
          <div key={item}>Lorem ipsum dolor sit amet.</div>
        ))}
      </div>
    </div>
  );
}
