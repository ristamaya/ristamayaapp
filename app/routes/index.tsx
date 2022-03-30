import { json, Link, LoaderFunction, redirect } from "remix";
import { getUserId } from "~/models/session.server";
import { SetVisitor, visitorCookie } from "~/models/log.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/core");
  const response = await fetch("https://geolocation-db.com/json");
  const visitor = await SetVisitor(request, await response.json());
  return visitor;
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
                    to="/share/playground"
                    className="flex items-center justify-center rounded-md border border-theme-base bg-theme-btn-inverted/90 px-4 py-3 text-base font-medium text-theme-inverted shadow-sm hover:bg-theme-btn-inverted sm:px-8"
                  >
                    Playground
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: "./svg/remixjs.svg",
                alt: "Remix JS",
                href: "https://remix.run/",
              },
              {
                src: "./svg/reactjs.svg",
                alt: "React JS",
                href: "https://reactjs.org/",
              },
              {
                src: "./svg/typescript.svg",
                alt: "TypeScript",
                href: "https://typescriptlang.org",
              },
              {
                src: "./svg/tailwindcss.svg",
                alt: "Tailwind CSS",
                href: "https://tailwindcss.com",
              },
              {
                src: "./svg/prisma.svg",
                alt: "Prisma",
                href: "https://prisma.io",
              },
              {
                src: "./svg/mongodb.svg",
                alt: "MongoDB",
                href: "https://www.mongodb.com/",
              },
              {
                src: "./svg/netlify.svg",
                alt: "Netlify",
                href: "https://netlify.com",
              },
              {
                src: "./svg/prettier.svg",
                alt: "Prettier",
                href: "https://prettier.io",
              },
              {
                src: "./svg/eslint.svg",
                alt: "ESLint",
                href: "https://eslint.org",
              },
              {
                src: "./svg/vscode.svg",
                alt: "Visual Studio Code",
                href: "https://code.visualstudio.com/",
              },
            ].map((img) => (
              <a
                target={"_blank"}
                key={img.href}
                href={img.href}
                className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
