import { Header } from "./components/Header";

import { Outlet, Link } from "react-router-dom";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="flex flex-col justify-between bg-texture h-screen w-screen">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
