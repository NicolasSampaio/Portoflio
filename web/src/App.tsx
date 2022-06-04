import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";

import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
