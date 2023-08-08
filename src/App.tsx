import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import BaseLayout from "@/layouts/BaseLayout";
import ContactPage from "@/pages/ContactPage";
import CreateCrowdFundingPage from "@/pages/CreateCrowdFundingPage";
import CreateTicketPage from "@/pages/CreateTicketPage";
import CrowdFundingDetailPage from "@/pages/CrowdFundingDetailPage";
import CrowdFundingPage from "@/pages/CrowdFundingPage";
import HistoryDetailPage from "@/pages/HistoryDetailPage";
import HistoryPage from "@/pages/HistoryPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import MarketplacePage from "@/pages/MarketplacePage";
import MarketplacesPage from "@/pages/MarketplacesPage";
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";
import SwapPage from "@/pages/SwapPage";
import TicketPage from "@/pages/TicketPage";

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
          <Route path="/history-detail/:id" element={<HistoryDetailPage />} />
          <Route path="/create-crowdfunding" element={<CreateCrowdFundingPage />} />
          <Route path="/create-ticket" element={<CreateTicketPage />} />
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
