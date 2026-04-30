import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import TechnicalGuide from './pages/TechnicalGuide';

// Feature Pages
import AcademicManagement from './features/AcademicManagement';
import StaffManagement from './features/StaffManagement';
import FinanceManagement from './features/FinanceManagement';
import Communication from './features/Communication';
import ParentStudentPortal from './features/ParentStudentPortal';
import Administration from './features/Administration';
import TransportManagement from './features/TransportManagement';
import LibraryManagement from './features/LibraryManagement';
import HostelManagement from './features/HostelManagement';
import OtherFacilities from './features/OtherFacilities';
import ReportsAnalytics from './features/ReportsAnalytics';
import TechnicalSystemFeatures from './features/TechnicalSystemFeatures';
import PricingPage from './pages/PricingPage';
import SupportPage from './pages/SupportPage';


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/technical-guide/:category" element={<TechnicalGuide />} />

        {/* Feature Routes */}
        <Route path="/features/academic-management" element={<AcademicManagement />} />
        <Route path="/features/staff-management" element={<StaffManagement />} />
        <Route path="/features/finance-management" element={<FinanceManagement />} />
        <Route path="/features/communication" element={<Communication />} />
        <Route path="/features/parent-student-portal" element={<ParentStudentPortal />} />
        <Route path="/features/administration" element={<Administration />} />
        <Route path="/features/transport-management" element={<TransportManagement />} />
        <Route path="/features/library-management" element={<LibraryManagement />} />
        <Route path="/features/hostel-management" element={<HostelManagement />} />
        <Route path="/features/other-facilities" element={<OtherFacilities />} />
        <Route path="/features/reports-analytics" element={<ReportsAnalytics />} />
        <Route path="/features/technical-system-features" element={<TechnicalSystemFeatures />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </div>

  );
}

export default App;


