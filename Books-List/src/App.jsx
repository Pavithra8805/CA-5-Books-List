import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./Components/Form";
import Books from "./Components/Books";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/register" element={<Forms />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  } 
}
