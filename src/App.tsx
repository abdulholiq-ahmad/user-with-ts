import { Route, Routes } from "react-router-dom";
import { FC } from "react";

import Layout from "./layout/";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
