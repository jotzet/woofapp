import All from "../All";
import Home from "./Home";
import Search from "../Search";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
