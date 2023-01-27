import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import Home from "./components/Home";

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/> }>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );