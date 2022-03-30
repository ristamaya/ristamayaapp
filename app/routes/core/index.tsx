import { json, Link, LoaderFunction, redirect } from "remix";
import { requireUserId } from "~/models/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  return json({});
};

export default function Index() {
  return (
    <div id="MainContent" className="h-screen bg-theme-muted text-9xl">
      <div className="relative sm:pb-16 sm:pt-8 ">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative rounded-md shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img className="h-full w-full object-contain" src="./img/main.png" alt="Ristamaya" />
              <div className="absolute inset-0 bg-theme-fill mix-blend-multiply" />
            </div>
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-theme-inverted/75 drop-shadow-md">
                  Ristamaya
                </span>
              </h1>
              <p className="mb-1 text-center text-lg text-theme-inverted drop-shadow-md sm:text-lg">
                Hello there I'm
                <span className="font-semibold sm:text-2xl lg:text-3xl"> Anjar Setyo</span>. Thanks
                a lot for visiting my personal website please take a look what's going on here
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0">
                  <Link
                    to="/core/walkthroughs"
                    className="flex items-center justify-center rounded-md border border-theme-base bg-theme-btn-inverted/90 px-4 py-3 text-base font-medium text-theme-inverted shadow-sm hover:bg-theme-btn-inverted sm:px-8"
                  >
                    Walkthroughs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
