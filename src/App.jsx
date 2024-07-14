import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import PageLoader from "./Components/Loaders/PageLoader.jsx";

const MainDashboard = lazy(() => import("./Layouts/Main/MainDashboard.jsx"));
const NotFound = lazy(() => import("./Pages//NotFound/NotFound.jsx"));
const QuizDashboard = lazy(() => import("./Layouts/Quiz/QuizDashboard.jsx"));

import { GlobalStyles, RootWrapper } from "./assets/styles/globalStyles.js";

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RootWrapper>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<MainDashboard />}></Route>

          <Route path="/quiz" element={<QuizDashboard />}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootWrapper>
    </Suspense>
  );
}
