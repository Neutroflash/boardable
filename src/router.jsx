import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import Accounts from "./components/Accounts/index";
import Menu from "./components/Menu/index";
import Boards from "./components/Boards/Boards";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/boards" element={<Boards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
