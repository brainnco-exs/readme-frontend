import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MegaSena from "../Pages/Megasena";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MegaSena />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
