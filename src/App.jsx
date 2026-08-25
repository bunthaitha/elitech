import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import SolutionsSection from './components/SolutionsSection';
import BrandsSection from './components/BrandsSection';
import FeaturedTechnologySection from './components/FeaturedTechnologySection';
import IndustriesSection from './components/IndustriesSection';
import WhyElitechSection from './components/WhyElitechSection';
import ProvenRecordSection from './components/ProvenRecordSection';
import CompanyStorySection from './components/CompanyStorySection';
import PartnerSection from './components/PartnerSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

// Detail Pages
import ProductDetailPage from './pages/ProductDetailPage';
import SolutionDetailPage from './pages/SolutionDetailPage';

// Modals
import QuoteModal from './components/QuoteModal';
import PartnerModal from './components/PartnerModal';
import ContactModal from './components/ContactModal';
import BrandDetailModal from './components/BrandDetailModal';

export default function App() {
  // Navigation View State: { type: 'home' | 'product' | 'solution', id?: string }
  const [view, setView] = useState({ type: 'home' });
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedBrandModal, setSelectedBrandModal] = useState(null);
  const [quoteDefaultBrand, setQuoteDefaultBrand] = useState('eset');

  const handleOpenQuote = (brandId = 'eset') => {
    setQuoteDefaultBrand(brandId || 'eset');
    setIsQuoteOpen(true);
  };

  const handleOpenPartner = () => {
    setIsPartnerOpen(true);
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleSelectBrand = (brandId) => {
    setView({ type: 'product', id: brandId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSolution = (solutionId) => {
    setView({ type: 'solution', id: solutionId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setView({ type: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="elitech-app-root">
      {/* Top Header Navbar */}
      <Navbar
        onOpenQuote={() => handleOpenQuote('eset')}
        onOpenContact={handleOpenContact}
        onSelectSolution={handleSelectSolution}
        onSelectBrand={handleSelectBrand}
        onGoHome={handleBackToHome}
      />

      <main id="main-content">
        {/* Render Dedicated Product Page */}
        {view.type === 'product' && (
          <ProductDetailPage
            brandId={view.id}
            onBack={handleBackToHome}
            onSelectBrand={handleSelectBrand}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {/* Render Dedicated Solution Page */}
        {view.type === 'solution' && (
          <SolutionDetailPage
            solutionId={view.id}
            onBack={handleBackToHome}
            onSelectSolution={handleSelectSolution}
            onSelectBrand={handleSelectBrand}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {/* Render Main Homepage Flow */}
        {view.type === 'home' && (
          <>
            {/* Hero Banner */}
            <Hero
              onExploreSolutions={() => {
                const el = document.querySelector('#solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenContact={handleOpenContact}
            />

            {/* Company Intro */}
            <TrustIntro />

            {/* Solutions List */}
            <SolutionsSection
              onOpenQuote={() => handleOpenQuote('eset')}
              onSelectSolution={handleSelectSolution}
            />

            {/* Technology Partners Grid */}
            <BrandsSection
              onSelectBrand={handleSelectBrand}
            />

            {/* Featured Technology Split Section */}
            <FeaturedTechnologySection
              onSelectBrand={handleSelectBrand}
              onOpenQuote={handleOpenQuote}
            />

            {/* Industries We Serve */}
            <IndustriesSection
              onOpenQuote={() => handleOpenQuote('eset')}
            />

            {/* Why ELITECH Statement & Points */}
            <WhyElitechSection />

            {/* Proven Record Stats */}
            <ProvenRecordSection />

            {/* Company Story Timeline */}
            <CompanyStorySection />

            {/* Partner Program CTA */}
            <PartnerSection
              onBecomePartner={handleOpenPartner}
            />

            {/* FAQ Accordion */}
            <FaqSection />

            {/* Final Contact Split */}
            <FinalCtaSection
              onOpenQuote={() => handleOpenQuote('eset')}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={() => handleOpenQuote('eset')}
        onOpenContact={handleOpenContact}
        onSelectBrand={handleSelectBrand}
        onSelectSolution={handleSelectSolution}
        onGoHome={handleBackToHome}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultBrandId={quoteDefaultBrand}
      />

      <PartnerModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <BrandDetailModal
        brandId={selectedBrandModal}
        onClose={() => setSelectedBrandModal(null)}
        onOpenQuoteWithBrand={(brandId) => {
          setSelectedBrandModal(null);
          handleOpenQuote(brandId);
        }}
      />
    </div>
  );
}
