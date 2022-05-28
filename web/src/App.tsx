import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { Outlet, Link } from "react-router-dom";

export function App() {
  return (
    <div className="bg-texture h-screen w-screen">
      <Header />

      <Outlet />
    </div>
  );
}
