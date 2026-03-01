import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import {
  PrinciplesSection,
  ColorSection,
  TypographySection,
  SpacingSection,
  GridSection,
  ElevationSection,
} from './components/FoundationSections';
import {
  ButtonsSection,
  DropdownSection,
  CardSection,
} from './components/ComponentSections';

export default function App() {
  const [activeSection, setActiveSection] = useState('principles');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex">
      <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} />

      <main className="ml-80 flex-1">
        <div className="max-w-7xl mx-auto px-24 py-24">
          {/* Header */}
          <header className="mb-32">
            <h1 className="text-7xl md:text-8xl font-semibold text-[#F5F1E8] mb-12 leading-[0.92] tracking-[-0.04em] uppercase">
              Portfolio<br />
              <span className="font-black italic text-[#D4AC4C]">Design System</span>
            </h1>
            <p className="text-xl text-[#B8B1A6] max-w-3xl leading-relaxed">
              A modern, architectural design language that balances minimalism with cultural heritage.
              Every element is intentional, every color meaningful.
            </p>
          </header>

          {/* Sections */}
          <div id="principles">
            <PrinciplesSection />
          </div>

          <div id="color">
            <ColorSection />
          </div>

          <div id="typography">
            <TypographySection />
          </div>

          <div id="spacing">
            <SpacingSection />
          </div>

          <div id="grid">
            <GridSection />
          </div>

          <div id="elevation">
            <ElevationSection />
          </div>

          <div id="buttons">
            <ButtonsSection />
          </div>

          <div id="dropdown">
            <DropdownSection />
          </div>

          <div id="card">
            <CardSection />
          </div>
        </div>
      </main>
    </div>
  );
}
