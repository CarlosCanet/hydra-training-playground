import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SuccessPage from "./pages/SuccessPage";
import NotFoundPage from "./pages/NotFoundPage";
import SecretPage from "./pages/SecretPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Explicit routes for the five login pages */}
        <Route path="/login/:level" element={<LoginPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/secret-page" element={<SecretPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
