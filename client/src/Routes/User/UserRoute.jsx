import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../Pages/User/Home";

export const UserRoute = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};
