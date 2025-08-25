import { useCallback, useState } from "react";
import Modal from "./modal";
import { Link } from "react-router";

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const handleDismiss = useCallback(() => setIsOpen(false), []);

  return (
    <div className="min-h-svh relative grid grid-rows-2 place-items-center">
      <button
        onClick={handleToggle}
        className="cursor-pointer bg-zinc-100 px-4 py-2 rounded hover:shadow-md focus-visible:outline-gray-400 transition-shadow"
      >
        Open Modal
      </button>

      {isOpen && (
        <Modal handleDismiss={handleDismiss}>
          <h2 className="text-2xl font-semibold text-gray-600">
            Modal Challenge
          </h2>
          <h3 className="mt-1 text-gray-500">
            Check some of the others challenges:{" "}
          </h3>

          <div className="mt-4">
            <div className="flex gap-3">
              <Link
                className="hover:underline rounded text-gray-800 outline-none focus-visible:ring"
                to="/tabs"
              >
                Accessible Tabs
              </Link>
              <Link
                className="hover:underline rounded text-gray-800 outline-none focus-visible:ring"
                to="/tree-view"
              >
                Tree View
              </Link>
              <Link
                className="hover:underline rounded text-gray-800 outline-none focus-visible:ring"
                to="/star-rating"
              >
                Star Rating
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
