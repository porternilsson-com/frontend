import { Outlet } from "react-router";
import { Navbar } from "~/components/layout/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center mx-auto w-full max-w-5xl px-4">
        <Outlet />
      </main>
    </div>
  );
}
