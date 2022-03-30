import { FC } from "react";
import LinkItem from "~/components/layout/navbar/menubar/linkitem";

export interface LinkSource {
  href: string;
  title: string;
}

const MenuBar: FC<{ LinkItems?: LinkSource[] }> = (props) => {
  const LinkItems = !props.LinkItems ? [{ href: "/", title: "RISTAMA" }] : props.LinkItems;
  return (
    <div
      id="MenuBar"
      className="relative flex h-full w-fit items-center overflow-auto overflow-y-hidden"
    >
      {LinkItems.map((item, index) => (
        <LinkItem key={index} href={item.href} title={item.title} />
      ))}
    </div>
  );
};

export default MenuBar;
