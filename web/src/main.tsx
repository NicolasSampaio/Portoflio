import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App } from "./App";

import { Portfolio } from "./routes/portfolio";
import { AboutMe } from "./routes/aboutMe";
import { Home } from "./routes/home";

import "./global.css";
import { ScrollToTop } from "./utils/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />

            <Route path="portfolio" element={<Portfolio />}>
              <Route index element={<Portfolio />} />
            </Route>
            <Route path="aboutme" element={<AboutMe />}>
              <Route index element={<AboutMe />} />
            </Route>
          </Route>

          <Route
            path="*"
            element={
              <main className="self-center">
                <p className="text-white">Get out of here curious 👺!</p>
              </main>
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
