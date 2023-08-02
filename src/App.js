import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/nav/Header";
import { Home, Login, Register, ResetPassword } from "./pages/index";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
