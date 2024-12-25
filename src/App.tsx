import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import FeaturesLayout from '@/components/layouts/FeaturesLayout';
import Features from '@/pages/Features';
import SmartBudgeting from '@/pages/SmartBudgeting';
import Analytics from '@/pages/Analytics';
import Savings from '@/pages/Savings';
import BillManagement from '@/pages/BillManagement';
import MultiAccountSupport from '@/pages/MultiAccountSupport';
import FinancialPlanningTools from '@/pages/FinancialPlanningTools';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Other routes */}
          <Route path="/features" element={<FeaturesLayout />}>
            <Route index element={<Features />} />
            <Route path="smart-budgeting" element={<SmartBudgeting />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="savings" element={<Savings />} />
            <Route path="bill-management" element={<BillManagement />} />
            <Route path="multi-account" element={<MultiAccountSupport />} />
            <Route path="planning-tools" element={<FinancialPlanningTools />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;