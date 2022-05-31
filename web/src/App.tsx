import { Header } from "./components/Header";

import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="h-screen flex flex-col justify-between bg-texture bg-repeat">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
