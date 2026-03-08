import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="dark min-h-screen flex flex-col bg-[url('/backgrounds/background-2.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="pointer-events-none py-6 mt-auto hidden md:block">
        <div className="flex justify-center">
          <span className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-sm text-muted-foreground shadow-lg">
            Desarrollado con React · Tailwind CSS · AI
          </span>
        </div>
      </footer>
    </div>
  );
}
