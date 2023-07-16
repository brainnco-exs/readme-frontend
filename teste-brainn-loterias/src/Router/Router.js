import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import LotteryPage from "../Pages/LotteryPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/megasena" replace />} />
        <Route path="/:lotteryType" element={<LotteryPageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

const LotteryPageWrapper = () => {
  const { lotteryType } = useParams();

  return <LotteryPage lotteryType={lotteryType} />;
};

export default Router;
