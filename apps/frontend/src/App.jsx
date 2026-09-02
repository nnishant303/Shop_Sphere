import Login from "./pages/Auth/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import Signup from "./pages/Auth/Signup/Signup.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* this is just testing  */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
