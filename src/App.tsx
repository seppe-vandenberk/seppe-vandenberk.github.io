import { Route, Routes } from "react-router-dom";


import {HeroUIProvider} from "@heroui/react";
import IndexPage from "./pages";
import Education from "./pages/education";
import Teaching from "./pages/teaching";
import Portfolio from "./pages/portfolio";
import Publications from "./pages/publications";
import ThesisAdvising from "./pages/thesis_advising.tsx";
import Presentations from "./pages/presentations";

function App() {
  return (
    <HeroUIProvider>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<Education />} path="/education" />
        <Route element={<Teaching />} path="/teaching" />
        <Route element={<ThesisAdvising />} path="/thesis-advising" />
        <Route element={<Portfolio />} path="/portfolio" />
        <Route element={<Publications />} path="/publications" />
        <Route element={<Presentations />} path="/presentations" />
      </Routes>
    </HeroUIProvider>
  );
}

export default App;
