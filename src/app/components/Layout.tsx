import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="dark min-h-screen flex flex-col bg-[url('/backgrounds/background-2.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <div className="pointer-events-none fixed inset-x-0 bottom-3 z-50 flex justify-center px-4">
        <div className="pointer-events-auto max-w-xl rounded-2xl border border-white/10 bg-zinc-900/70 px-3 py-2 text-xs text-zinc-100 shadow-sm backdrop-blur">
          <span className="font-medium">Desarrollado con</span>
          <span className="mx-2 text-zinc-300">
            React · Tailwind · Radix · Recharts · AI
          </span>
          <a
            href="https://nico-piovano-porfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-80"
          >
            <span className="font-medium">by Nico Piovano</span>
          </a>
        </div>
      </div>
    </div>
  );
}
