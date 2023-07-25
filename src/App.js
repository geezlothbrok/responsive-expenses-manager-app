import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/nav/Header";
import { Home, Login } from "./pages/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
