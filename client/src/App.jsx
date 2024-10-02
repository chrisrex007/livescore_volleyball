import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Athletics from "./components/Athletics";
import Home from "./components/Home";
import Volleyball from "./components/Volleyball";
import Tennis from "./components/Tennis";
import VolleyballEditor from "./components/VolleyballEditor";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Volleyball />} />
          <Route path="/athletics" element={<Athletics />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/volleyballeditor" element={<VolleyballEditor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
