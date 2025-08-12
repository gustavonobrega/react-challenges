import { useState } from "react";
import {
  Folder,
  FolderOpen,
  File,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

import type { IMenuItem } from "./tree";
import MenuList from "./menu-list";

interface MenuItemProps {
  item: IMenuItem;
}

export default function MenuItem({ item }: MenuItemProps) {
  const [isChildrenOpen, setIsChildrenOpen] = useState(false);

  function handleIsChildrenOpen() {
    setIsChildrenOpen(!isChildrenOpen);
  }

  return (
    <>
      {!item.children ? (
        <li className="flex items-center gap-1 ml-8 py-0.5 text-sm">
          <File size={16} className="text-zinc-500" />
          <span>{item.label}</span>
        </li>
      ) : (
        <li className="flex flex-col ml-3">
          <button
            onClick={handleIsChildrenOpen}
            className="flex items-center gap-1 text-sm py-0.5 hover:bg-gray-200 transition-colors rounded"
          >
            {isChildrenOpen ? (
              <ChevronDown size={16} className="text-zinc-500" />
            ) : (
              <ChevronRight size={16} className="text-zinc-500" />
            )}
            {isChildrenOpen ? (
              <FolderOpen size={16} className="text-zinc-500" />
            ) : (
              <Folder size={16} className="text-zinc-500" />
            )}
            {item.label}
          </button>
          {isChildrenOpen && <MenuList list={item.children} />}
        </li>
      )}
    </>
  );
}
