import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['foundations', 'components', 'application']);

  const toggleSection = (section: string) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter(s => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  const NavItem = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => onSectionChange(id)}
      className={`w-full text-left px-8 py-3 text-sm transition-colors ${
        activeSection === id
          ? 'text-white bg-[#1A1A1A] border-l-2 border-white'
          : 'text-white hover:text-white'
      }`}
    >
      {label}
    </button>
  );

  const SectionHeader = ({ id, label }: { id: string; label: string }) => {
    const isExpanded = expandedSections.includes(id);
    return (
      <button
        onClick={() => toggleSection(id)}
        className="w-full text-left px-8 py-4 text-xs uppercase tracking-widest font-medium text-white hover:text-white transition-colors flex items-center justify-between"
      >
        {label}
        <svg
          className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    );
  };

  return (
    <aside className="w-80 h-screen fixed left-0 top-0 bg-[#157372] border-r border-white/10 overflow-y-auto">
      <div className="px-8 py-12 border-b border-white/10">
        <h1 className="text-sm uppercase tracking-widest text-[#1A1A1A]/80 mb-2">Design System</h1>
        <p className="text-2xl text-[#1A1A1A] font-light">Portfolio</p>
      </div>

      <nav className="py-8">
        <NavItem id="introduction" label="01 Introduction" />
        <NavItem id="principles" label="02 Principles" />
        
        <div className="mt-8">
          <SectionHeader id="foundations" label="03 Foundations" />
          {expandedSections.includes('foundations') && (
            <div>
              <NavItem id="color" label="Color System" />
              <NavItem id="typography" label="Typography" />
              <NavItem id="iconography" label="Iconography" />
              <NavItem id="spacing" label="Spacing" />
              <NavItem id="grid" label="Grid System" />
              <NavItem id="responsive-design" label="Responsive Design" />
              <NavItem id="elevation" label="Elevation" />
              <NavItem id="image-aspect-ratio" label="Image Aspect Ratio" />
            </div>
          )}
        </div>

        <div className="mt-8">
          <SectionHeader id="components" label="04 Components" />
          {expandedSections.includes('components') && (
            <div>
              <NavItem id="buttons" label="Buttons" />
              <NavItem id="text-input" label="Text Input" />
              <NavItem id="checkbox" label="Checkbox" />
              <NavItem id="radio-button" label="Radio Button" />
              <NavItem id="dropdown" label="Dropdown" />
              <NavItem id="card" label="Card" />
            </div>
          )}
        </div>

        <div className="mt-8">
          <SectionHeader id="application" label="05 Application" />
          {expandedSections.includes('application') && (
            <div>
              <NavItem id="wireframes" label="Wireframes" />
              <NavItem id="portfolio-mockups" label="Portfolio Mockups" />
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
