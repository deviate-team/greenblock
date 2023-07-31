import AuthLayout from "@/layouts/AuthLayout";
import BaseLayout from "@/layouts/BaseLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import TicketPage from "@/pages/TicketPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;