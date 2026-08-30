import Login from "./pages/Auth/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* this is just testing  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
