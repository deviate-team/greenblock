import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import BaseLayout from "@/layouts/BaseLayout";
import ConfirmPage from "@/pages/ConfirmPage";
import ContactPage from "@/pages/ContactPage";
import CreateTicketPage from "@/pages/CreateTicketPage";
import HistoryDetailPage from "@/pages/HistoryDetailPage";
import HistoryPage from "@/pages/HistoryPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import MarketplacePage from "@/pages/MarketplacePage";
import MarketplacesPage from "@/pages/MarketplacesPage";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";
import SwapPage from "@/pages/SwapPage";
import CrowdFundingDetailPage from "@/pages/CrowdFundingDetailPage";
import CreateCrowdFundingPage from "@/pages/CreateCrowdFundingPage";
import TicketPage from "@/pages/TicketPage";
import CrowdFundingPage from "@/pages/CrowdFundingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/marketplace" element={<MarketplacesPage />} />
          <Route path="/marketplace/:id" element={<MarketplacePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/swap" element={<SwapPage />} />
          <Route path="/crowdfunding" element={<CrowdFundingPage />} />
          <Route path="/crowdfunding/:id" element={<CrowdFundingDetailPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history-detail" element={<HistoryDetailPage />} />
          <Route path="/create-crowdfunding" element={<CreateCrowdFundingPage />} />
          <Route path="/create-ticket" element={<CreateTicketPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
        </Route >
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes >
    </BrowserRouter >
  );
};

export default App;
