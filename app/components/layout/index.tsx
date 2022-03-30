import { ReactNode, useState } from "react";
import { LayoutProvider } from "~/components/layout/layout.context";
import { FloatControl } from "~/components/layout/floatcontrol";
import NavBar from "~/components/layout/navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [useTheme, setUseTheme] = useState("");

  return (
    <LayoutProvider value={{ useTheme, setUseTheme }}>
      <div className={`${useTheme}`}>
        <NavBar />
        <main
          id="MainContent"
          className={`fixed top-16 z-40 block h-[calc(100%-64px)] w-screen overflow-auto bg-theme-muted`}
        >
          {children}
        </main>
        <div id="ThemeChanger" className="absolute bottom-0 right-0 z-50">
          <FloatControl />
        </div>
      </div>
    </LayoutProvider>
  );
}
