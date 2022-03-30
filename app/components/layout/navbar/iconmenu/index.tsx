import React, { FC, useState } from "react";
import { Link } from "remix";
import DynamicIcon from "~/components/dynamicicon";

export interface MenuItem {
  icon?: string;
  title?: string;
  href?: string;
}

const IconMenu: FC<{
  onleft: boolean;
  icon: string;
  parentClass?: string;
  childClass: string;
  menuItem: MenuItem[];
}> = (props) => {
  const menuItem = props.menuItem;
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="relative m-1 flex h-auto w-16 items-center justify-center">
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setOpenMenu(true);
        }}
        className="peer relative flex h-fit w-fit rounded-full p-2 hover:scale-95"
      >
        <DynamicIcon icon={props.icon} className={`${props.parentClass}`} />
      </button>

      {menuItem && openMenu && (
        <div
          id="IconMenus"
          className={`invisible absolute top-12 z-40 mx-2 h-auto max-h-[calc(100vh-74px)] w-auto -translate-y-full flex-row overflow-auto rounded-md border  border-theme-base bg-theme-muted pl-2
          pr-9 opacity-0 shadow-md transition-all duration-500 hover:visible hover:translate-y-0 hover:opacity-100 peer-focus:visible
          peer-focus:translate-y-0 peer-focus:opacity-100 ${props.onleft ? "left-0" : "right-0"}`}
        >
          {menuItem.map((item, index) => (
            <Link key={index} to={item.href}>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  // setOpenMenu(!openMenu);
                }}
                className="m-2 flex cursor-pointer items-center text-sm hover:scale-105"
              >
                <DynamicIcon icon={item.icon} className={`${props.childClass}`} />
                {item.title}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default IconMenu;
