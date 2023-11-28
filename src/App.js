import React from "react";
import TaskManager from "./components/TaskManager";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ChildCard from "./components/card/childcard/ChildCard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TaskManager />} />
        <Route exact path="/card/:id" element={<ChildCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
