import AuthLayout from "@/layouts/AuthLayout";
import BaseLayout from "@/layouts/BaseLayout";
import ContactPage from "@/pages/ContactPage";
import HistoryDetailPage from "@/pages/HistoryDetailPage";
import HistoryPage from "@/pages/HistoryPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import MarketplacePage from "@/pages/MarketplacePage";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";
import SwapPage from "@/pages/SwapPage";
import TicketPage from "@/pages/TicketPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/marketplace/:id" element={<SwapPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history-detail" element={<HistoryDetailPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
