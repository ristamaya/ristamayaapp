import React, { FC } from "react";
import IconMenu from "~/components/layout/navbar/iconmenu";
import MenuBar from "~/components/layout/navbar/menubar";

export interface menuItems {
  icon: string;
  title: string;
  href: string;
}

export interface IconMenuItems {
  icon?: string;
  menus?: menuItems[];
}

export interface MenuBarItems {
  href: string;
  title: string;
}

const NavBar: FC<{
  ModuleItems?: IconMenuItems;
  ControlItems?: IconMenuItems;
  MenuItems?: MenuBarItems[];
}> = (props) => {
  const moduleItems = !props.ModuleItems
    ? {
        icon: "FiCpu",
      }
    : props.ModuleItems;

  const controlItems = !props.ControlItems
    ? {
        icon: "FiUser",
        menus: [
          { icon: "FiLogIn", title: "Login", href: "/auth/login" },
          { icon: "FiLogIn", title: "Register", href: "/auth/register" },
        ],
      }
    : props.ControlItems;

  const menuItems = !props.MenuItems
    ? [
        { href: "/", title: "Ristamaya" },
        { href: "/share/playground", title: "Playground" },
        { href: "/share/post", title: "Post" },
        { href: "/share/about", title: "About" },
      ]
    : props.MenuItems;

  return (
    <div
      id="NavBar"
      className={`fixed z-50 flex h-16 w-screen items-center justify-between bg-theme-fill text-theme-base shadow-md`}
    >
      <IconMenu
        onleft={true}
        icon={moduleItems.icon}
        parentClass="w-8 h-8"
        childClass="w-6 h-6"
        menuItem={moduleItems.menus}
      />

      <MenuBar LinkItems={menuItems} />

      <IconMenu
        onleft={false}
        icon={controlItems.icon}
        parentClass="w-8 h-8"
        childClass="w-6 h-6"
        menuItem={controlItems.menus}
      />
    </div>
  );
};

export default NavBar;
