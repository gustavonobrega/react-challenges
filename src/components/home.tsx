import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

 const CHALLENGES = [
    { id: 1, name: "Accordion", link: "/accordion" },
    { id: 2, name: "Random Color Genenrator", link: "/random-color-generator" },
    { id: 3, name: "Star Rating", link: "/star-rating" },
    { id: 4, name: "Image Slider", link: "/image-slider" },
    { id: 5, name: "Load More Data", link: "/load-more-data" },
    { id: 6, name: "Tree View", link: "/tree-view" },
    { id: 7, name: "Light/Dark Mode", link: "/light-dark-mode" },
    { id: 8, name: "Scroll Indicator", link: "/scroll-indicator" },
    { id: 9, name: "Accessible Tabs", link: "/tabs" },
    { id: 10, name: "Modal", link: "/modal" },
    { id: 11, name: "Tic Tac Toe", link: "/tic-tac-toe" },
    { id: 12, name: "useDebounce", link: "/use-debounce" },
    { id: 13, name: "Starfield Button", link: "/starfield-button" },
    { id: 14, name: "Multi Step Form", link: "/multi-step-form" },
    { id: 15, name: "Drag and Drop", link: "/drag-and-drop" },
    { id: 16, name: "useOnClickOutside", link: "/use-clickoutside" },
    { id: 17, name: "Multi Checkbox", link: "/multi-checkbox" },
  ];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-3xl mx-auto px-4 py-8 text-slate-800">
        <h1 className="text-4xl text-center font-bold">React Challenges</h1>

        <nav className="mt-8 grid gap-y-4 justify-items-center grid-cols-1">
          {CHALLENGES.map((challenge) => (
            <Link
              className="flex items-center gap-1 text-lg group hover:underline underline-offset-2 "
              to={challenge.link}
              key={challenge.id}
            >
              {challenge.name}
              <ArrowRight
                className="translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition"
                size={18}
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
