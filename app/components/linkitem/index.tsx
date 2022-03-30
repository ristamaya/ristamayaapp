import React, { FC } from "react";
import { Link } from "remix";

const LinkItem: FC<{ to: string; title: string; className: string }> = (
  props
) => {
  return (
    <Link to={props.to}>
      <button
        id="MenuItem"
        className={`relative flex items-center active:text-theme-inverted hover:text-theme-strong group ${props.className}`}
      >
        <span className="absolute right-0 h-full w-0 bg-theme-muted bg-opacity-20 rounded-sm group-hover:w-[calc(100%+100px)] transition-all ease-out duration-500"></span>
        {props.title}
      </button>
    </Link>
  );
};

export default LinkItem;
