import { Routes, Route } from 'react-router-dom';
import Velkomstside from './pages/Onboarding';
import HvaViTrenger from './pages/Desktop';
import CompanyInfo from './pages/CompanyInfo';
import CompanyInfoManualUS from './pages/CompanyInfoManualUS';
import Representative from './pages/Representative';
import RepresentativeVerified from './pages/RepresentativeVerified';
import ProductInformation from './pages/ProductInformation';
import LegalCompliance from './pages/LegalCompliance';
import ApplicationSubmitted from './pages/ApplicationSubmitted';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Velkomstside />} />
      <Route path="/hva-vi-trenger" element={<HvaViTrenger />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrer" element={<Placeholder title="Oprett konto" />} />
      <Route path="/registrer-steg" element={<CompanyInfo />} />
      <Route path="/registrer-steg/us-manual" element={<CompanyInfoManualUS />} />
      <Route path="/registrer-steg/representative" element={<Representative />} />
      <Route path="/registrer-steg/representative-verified" element={<RepresentativeVerified />} />
      <Route path="/registrer-steg/products" element={<ProductInformation />} />
      <Route path="/registrer-steg/terms" element={<LegalCompliance />} />
      <Route path="/registrer-steg/submitted" element={<ApplicationSubmitted />} />
    </Routes>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div style={{ padding: 48, fontFamily: 'Inter', textAlign: 'center' }}>
      <h1>{title}</h1>
      <p>
        <a href="/">Tilbake til velkomstsiden</a>
      </p>
    </div>
  );
}

export default App;
