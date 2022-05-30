import { Header } from "./components/Header";

import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="flex flex-col justify-between bg-texture bg-repeat min-h-screen">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
