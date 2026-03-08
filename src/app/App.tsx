import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import {
  IntroductionSection,
  PrinciplesSection,
  ColorSection,
  TypographySection,
  IconographySection,
  SpacingSection,
  GridSection,
  ResponsiveDesignSection,
  ElevationSection,
  WireframesSection,
  PortfolioMockupsSection,
} from './components/FoundationSections';
import {
  ButtonsSection,
  ImageAspectRatioSection,
  InputsSection,
  CheckboxSection,
  RadioButtonSection,
  DropdownSection,
  CardSection,
} from './components/ComponentSections';

export default function App() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} />

      <main className="ml-80 flex-1">
        <div className="max-w-7xl mx-auto px-24 py-24">
          <header className="mb-32">
            <h1 className="text-7xl md:text-8xl font-semibold text-[#F5F1E8] mb-6 leading-[0.92] tracking-[-0.04em] uppercase">
              <span className="font-black italic text-[#D4AC4C]">Design System</span>
            </h1>
            <p className="text-2xl text-[#F5F1E8] font-light mb-8">The visual foundation of my portfolio</p>
            <div className="w-[80px] h-[2px] bg-[#D4AC4C] mb-8" />
            <p className="text-xl text-[#B8B1A6] max-w-4xl leading-relaxed mb-8">
              A minimal design system that reflects my approach to UX, game design, and interactive media balancing structure, clarity, and subtle cultural references.
            </p>
            <p className="text-sm text-[#F5F1E8]/55 tracking-wide">Version 1.0 - CART 444 - Dorsa Zare</p>
          </header>

          <div id="introduction">
            <IntroductionSection />
          </div>
          <div id="principles">
            <PrinciplesSection />
          </div>

          <div id="color">
            <ColorSection />
          </div>

          <div id="typography">
            <TypographySection />
          </div>

          <div id="iconography">
            <IconographySection />
          </div>

          <div id="spacing">
            <SpacingSection />
          </div>

          <div id="grid">
            <GridSection />
          </div>

          <div id="responsive-design">
            <ResponsiveDesignSection />
          </div>

          <div id="elevation">
            <ElevationSection />
          </div>

          <div id="image-aspect-ratio">
            <ImageAspectRatioSection />
          </div>

          <div id="components"></div>
          <div id="buttons">
            <ButtonsSection />
          </div>

          <div id="text-input">
            <InputsSection />
          </div>

          <div id="checkbox">
            <CheckboxSection />
          </div>

          <div id="radio-button">
            <RadioButtonSection />
          </div>

          <div id="dropdown">
            <DropdownSection />
          </div>

          <div id="card">
            <CardSection />
          </div>

          <div id="application"></div>
          <div id="wireframes">
            <WireframesSection />
          </div>

          <div id="portfolio-mockups">
            <PortfolioMockupsSection />
          </div>
        </div>
      </main>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#D4AC4C] text-[#1A1A1A] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:bg-[#E1BC66] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5m0 0-6 6m6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
