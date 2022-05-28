import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./App";
import { Portfolio } from "./routes/portfolio";

import "./global.css";
import { Main } from "./components/Main";
import { AboutMe } from "./routes/aboutMe";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />

          <Route path="portfolio" element={<Portfolio />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Get out of here curious 👺!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
