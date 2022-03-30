import { Link, MetaFunction, Outlet } from "remix";
import LinkItem from "~/components/linkitem";

export const meta: MetaFunction = () => {
  return { title: "Ristamaya|Playground" };
};

export default function Playground() {
  const classNameLink = "h-9 w-40 font-semibold";

  return (
    <div className="relative z-0 block text-theme-base">
      {/* Sidebar */}
      <div className="fixed z-20 block h-[calc(100%-64px)] w-32 bg-theme-fill shadow-md">
        <div className="relative mt-3 mb-6 pl-2 text-xl font-semibold text-theme-strong">
          <Link to="/shared/playground">My Stuffs</Link>
        </div>

        <div
          id="PlaygroundSB"
          className="relative h-[calc(100%-140px)] overflow-auto overflow-x-hidden pl-2 text-xs font-semibold"
        >
          <LinkItem to="./layout" title="Layout" className={classNameLink} />
          <LinkItem to="./input" title="input" className={classNameLink} />
          <LinkItem to="./button" title="Button" className={classNameLink} />
          <LinkItem to="./table" title="Table" className={classNameLink} />
          <LinkItem to="./dynamicicon" title="Dynamic Icon" className={classNameLink} />
          <LinkItem to="./treeview" title="Treeview" className={classNameLink} />
        </div>
        <div className="relative mt-2 text-center text-xs font-semibold text-theme-strong">
          React.JS + Tailwind CSS
        </div>
      </div>

      {/* Content */}
      <div className="relative left-40 z-10 flex h-auto w-[calc(100%-192px)] p-2">
        <Outlet />
      </div>
    </div>
  );
}
