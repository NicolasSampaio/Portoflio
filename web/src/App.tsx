import { Header } from "./components/Header";

import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
