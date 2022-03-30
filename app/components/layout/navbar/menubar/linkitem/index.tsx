// import Link from "next/link";
import React, { FC } from "react";
import { Link } from "remix";

const LinkItem: FC<{ href: string; title: string }> = (props) => {
  const spanClass =
    "absolute h-0 w-full rounded-sm group-hover:h-full transition-all ease-out duration-700";
  return (
    <Link to={props.href}>
      <button
        id="MenuItem"
        className="group relative flex h-16 w-auto items-center px-2 hover:text-theme-strong active:text-theme-inverted"
      >
        <span className={`top-0 left-0 bg-theme-muted/5 ${spanClass}`}></span>
        <span className={`bottom-0 left-0 bg-theme-muted/20 ${spanClass}`}></span>

        {props.title}
      </button>
    </Link>
  );
};

export default LinkItem;
