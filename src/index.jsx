import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./utils/style.scss";
import Home from "./pages/Home";
import Typography from "./pages/Typography";
import Layouts from "./pages/Layouts";
import Animations from "./pages/Animations";
import reportWebVitals from "./reportWebVitals";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
ReactDOM.render(
  <React.StrictMode>
    {
      <BrowserRouter>
        <Header />
        <Cursor />
        <Routes>
          <Route exact path="/layers" element={<Home />} />
          <Route exact path="/layers/typography" element={<Typography />} />
          <Route exact path="/layers/Layouts" element={<Layouts />} />
          <Route exact path="/layers/Animations" element={<Animations />} />
        </Routes>
      </BrowserRouter>
    }
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
