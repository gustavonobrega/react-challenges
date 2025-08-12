import type { IMenuItem } from "./tree";
import MenuItem from "./menu-item";

interface MenuListProps {
  list: IMenuItem[];
}

export default function MenuList({ list }: MenuListProps) {
  const folders: IMenuItem[] = [];
  const files: IMenuItem[] = [];

  list.forEach((item) =>
    item.children ? folders.push(item) : files.push(item)
  );

  folders.sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label < b.label) {
      return 1;
    }
    return 0;
  });
  files.sort((a, b) => {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label < b.label) {
      return 1;
    }
    return 0;
  });

  return (
    <ul>
      {[...folders, ...files].map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </ul>
  );
}
