import MenuList from "./menu-list";

export interface IMenuItem {
  label: string;
  children?: IMenuItem[];
}

interface TreeProps {
  menu: IMenuItem[];
}

export default function Tree({ menu }: TreeProps) {
  return (
    <div className="h-full min-w-60 w-fit py-4 px-4 bg-gray-100">
      <MenuList list={menu} />
    </div>
  );
}
