export function IntroductionSection() {
  const introductionParagraphs = [
    'This design system reflects how I approach design across my work in UX/UI, game design, and interactive media. I wanted to build a visual language that feels clear, structured, and modern, but also subtly connected to my background and personal experiences.',
    'Growing up in Iran and later moving to Canada has shaped how I see design and visual culture. Persian design traditions often use rich colors, rhythm, and balance, while contemporary digital interfaces emphasize simplicity and clarity. In this system, I tried to find a balance between those influences.',
    'Rather than using literal cultural patterns or ornamentation, I chose colors that quietly reference Persian visual culture, like turquoise and saffron. These colors appear often in Iranian architecture, ceramics, and textiles. At the same time, the overall interface stays minimal and structured so the work itself remains the focus.',
    'My goal was to create a system that feels simple, calm, and intentional, where layout, spacing, and typography guide the experience while color adds a subtle sense of identity.',
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">01 / Introduction</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Introduction</h2>
        <div className="max-w-4xl space-y-6">
          {introductionParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-[#B8B1A6] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrinciplesSection() {
  const principles = [
    {
      title: 'Clarity Through Simplicity',
      paragraphs: [
        'I try to remove unnecessary visual noise and focus on what actually matters in the interface. Clear hierarchy, readable typography, and balanced spacing help users quickly understand what they are looking at.',
        'For my portfolio especially, I want the projects to speak for themselves, so the interface supports the work instead of competing with it.',
      ],
    },
    {
      title: 'Structure & Balance',
      paragraphs: [
        'Structure is important in my design process. I rely on grids, spacing systems, and alignment to create a sense of order and visual rhythm.',
        'This approach helps the interface feel predictable and easy to navigate, while also keeping the overall design calm and balanced.',
      ],
    },
    {
      title: 'Purposeful Color',
      paragraphs: [
        'Color is used carefully and intentionally in this system. Instead of many bright colors, I chose a small palette so that color can signal meaning and interaction.',
        'Turquoise acts as the main accent in the interface, while saffron appears more subtly as a secondary highlight.',
      ],
    },
    {
      title: 'Cultural Subtlety',
      paragraphs: [
        'As someone with an Iranian background, I wanted my visual language to carry a small piece of that identity. Instead of directly using Persian patterns or motifs, I chose colors that reference cultural materials like tiles, ceramics, and traditional architecture.',
        'These references stay subtle, allowing the system to feel contemporary while still reflecting something personal about where I come from.',
      ],
    },
  ];

  return (
    <section className="mb-48">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">02 / Principles</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Guiding Principles</h2>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {principles.map((principle, index) => (
          <div key={index} className="col-span-6">
            <div className="h-full border-l border-[#F5F1E8]/10 pl-8 py-8">
              <h3 className="text-2xl font-light text-[#F5F1E8] mb-6 leading-tight">{principle.title}</h3>
              <div className="space-y-4">
                {principle.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-[#B8B1A6] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ColorSection() {
  const colorSystemParagraphs = [
    'The color palette combines neutral tones for clarity and readability with accent colors inspired by Persian visual culture.',
    'Turquoise acts as the primary interface color and is used for actions, links, and interactive elements. Saffron works as a secondary accent that adds warmth without overwhelming the interface.',
    'Together these colors introduce a subtle cultural reference while keeping the interface modern and minimal.',
  ];

  const primaryColors = [
    { name: 'Turquoise 500', hex: '#1C8C8B', description: 'Primary brand color' },
    { name: 'Turquoise 400', hex: '#2BA6A5', description: 'Hover states' },
    { name: 'Turquoise 600', hex: '#157372', description: 'Active states' },
  ];

  const accentColors = [
    { name: 'Saffron 500', hex: '#D4AC4C', description: 'Accent color' },
    { name: 'Saffron 400', hex: '#E1BC66', description: 'Hover states' },
  ];

  const neutrals = [
    { name: 'Charcoal', hex: '#121212', description: 'Primary text' },
    { name: 'Gray 700', hex: '#404040', description: 'Secondary text' },
    { name: 'Gray 500', hex: '#737373', description: 'Tertiary text' },
    { name: 'Gray 300', hex: '#D4D4D4', description: 'Borders' },
    { name: 'Gray 100', hex: '#F5F5F5', description: 'Backgrounds' },
    { name: 'White', hex: '#FFFFFF', description: 'Canvas' },
  ];

  const semanticColors = [
    { name: 'Success', hex: '#059669', description: 'Positive actions' },
    { name: 'Error', hex: '#DC2626', description: 'Errors & deletion' },
    { name: 'Info', hex: '#1C8C8B', description: 'Informational' },
  ];

  const ColorPalette = ({ colors, title }: { colors: typeof primaryColors; title: string }) => (
    <div className="mb-16">
      <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-8">{title}</h4>
      <div className="grid grid-cols-12 gap-8">
        {colors.map((color, index) => (
          <div key={index} className="col-span-4">
            <div className="h-40 rounded mb-4 border border-[#F5F1E8]/10" style={{ backgroundColor: color.hex }} />
            <p className="font-medium text-[#F5F1E8] text-sm mb-1">{color.name}</p>
            <p className="text-xs text-[#B8B1A6] font-mono mb-2">{color.hex}</p>
            <p className="text-xs text-[#B8B1A6]">{color.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">03 / Foundations</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Color System</h2>
        <div className="max-w-2xl space-y-4">
          {colorSystemParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-[#B8B1A6] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-8">Neutrals</h4>
        <div className="grid grid-cols-12 gap-6">
          {neutrals.map((color, index) => (
            <div key={index} className="col-span-2">
              <div className="h-32 rounded mb-3 border border-[#F5F1E8]/10" style={{ backgroundColor: color.hex }} />
              <p className="font-medium text-[#F5F1E8] text-xs mb-1">{color.name}</p>
              <p className="text-xs text-[#B8B1A6] font-mono">{color.hex}</p>
            </div>
          ))}
        </div>
      </div>

      <ColorPalette colors={primaryColors} title="Primary" />
      <ColorPalette colors={accentColors} title="Accent" />

      <div className="mb-16">
        <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-8">Semantic Colors</h4>
        <div className="grid grid-cols-12 gap-8">
          {semanticColors.map((color, index) => (
            <div key={index} className="col-span-4">
              <div className="h-32 rounded mb-3 border border-[#F5F1E8]/10" style={{ backgroundColor: color.hex }} />
              <p className="font-medium text-[#F5F1E8] text-sm mb-1">{color.name}</p>
              <p className="text-xs text-[#B8B1A6] font-mono mb-2">{color.hex}</p>
              <p className="text-xs text-[#B8B1A6]">{color.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TypographySection() {
  const typographyParagraphs = [
    'Typography in this system focuses on clarity and hierarchy. I use a simple type scale so information can be scanned easily across the interface.',
    'Different text roles - display, headline, title, body, and label - help organize content and guide the reader through the page.',
    'Because most of my work is digital, the typography prioritizes legibility on screens while maintaining a clean and modern aesthetic.',
  ];

  const typeScale = [
    { name: 'Display', size: '72px', lineHeight: '80px', weight: '300', usage: 'Hero sections', sample: 'The quick brown fox' },
    { name: 'Headline', size: '48px', lineHeight: '56px', weight: '300', usage: 'Page titles', sample: 'The quick brown fox jumps' },
    { name: 'Title', size: '32px', lineHeight: '40px', weight: '400', usage: 'Section headers', sample: 'The quick brown fox jumps over' },
    { name: 'Body', size: '16px', lineHeight: '28px', weight: '400', usage: 'Paragraph text', sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Label', size: '14px', lineHeight: '20px', weight: '500', usage: 'UI labels', sample: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Legal', size: '12px', lineHeight: '18px', weight: '400', usage: 'Fine print', sample: 'The quick brown fox jumps over the lazy dog' },
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">03 / Foundations</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Typography</h2>
        <div className="max-w-2xl space-y-4">
          {typographyParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-[#B8B1A6] leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {typeScale.map((type, index) => (
          <div key={index} className="border-b border-[#F5F1E8]/10 pb-12">
            <div className="grid grid-cols-12 gap-8 mb-8">
              <div className="col-span-3">
                <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-4">{type.name}</p>
                <div className="space-y-2 text-xs text-[#B8B1A6]">
                  <p>Size: {type.size}</p>
                  <p>Line: {type.lineHeight}</p>
                  <p>Weight: {type.weight}</p>
                  <p className="pt-2 text-[#F5F1E8]/45">{type.usage}</p>
                </div>
              </div>
              <div className="col-span-9">
                <div className="text-[#F5F1E8]" style={{ fontSize: type.size, lineHeight: type.lineHeight, fontWeight: type.weight }}>
                  {type.sample}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SpacingSection() {
  const spacingParagraphs = [
    'Spacing plays an important role in creating breathing room between elements. I use an 8-point spacing system so margins, padding, and gaps stay consistent across the interface.',
    'This keeps layouts feeling structured and prevents pages from becoming visually crowded.',
  ];

  const spacingScale = [
    { token: '4', px: '4px' },
    { token: '8', px: '8px' },
    { token: '16', px: '16px' },
    { token: '24', px: '24px' },
    { token: '32', px: '32px' },
    { token: '48', px: '48px' },
    { token: '64', px: '64px' },
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">03 / Foundations</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Spacing Scale</h2>
        <div className="max-w-2xl space-y-4">
          {spacingParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-[#B8B1A6] leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {spacingScale.map((space, index) => (
          <div key={index} className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-2">
              <p className="text-sm font-mono text-[#F5F1E8] mb-1">{space.token}pt</p>
              <p className="text-xs text-[#B8B1A6]">{space.px}</p>
            </div>
            <div className="col-span-10">
              <div className="h-12 bg-[#D4AC4C]/18 border border-[#D4AC4C]/45 rounded" style={{ width: space.px }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function GridSection() {
  const gridParagraphs = [
    'The layout follows a 12-column grid which helps organize content and maintain consistent alignment across the interface.',
    'Using a grid allows different elements like text blocks, images, and project cards to stay visually balanced while adapting to different screen sizes.',
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">03 / Foundations</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Grid System</h2>
        <div className="max-w-2xl space-y-4">
          {gridParagraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-[#B8B1A6] leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="bg-[#F5F1E8]/[0.03] p-12 rounded">
        <div className="grid grid-cols-12 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-48 rounded flex items-end justify-center pb-4 border bg-[#D4AC4C]/18 border-[#D4AC4C]/45">
              <span className="text-xs font-mono text-[#D4AC4C]">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IconographySection() {
  const icons = [
    {
      name: 'Home',
      svg: (
        <path
          d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      name: 'Search',
      svg: (
        <>
          <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="m20 20-4.2-4.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      ),
    },
    {
      name: 'Settings',
      svg: (
        <>
          <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M12 2.5v2.3m0 14.4v2.3M21.5 12h-2.3M4.8 12H2.5m16.2-6.7-1.6 1.6M6.9 17.1l-1.6 1.6m0-13.4 1.6 1.6m11.8 10.2 1.6 1.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </>
      ),
    },
    {
      name: 'Arrow Right',
      svg: (
        <path
          d="M4 12h16m-6-6 6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
  ];
  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">03 / Foundations</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Iconography</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Icons use a simple outlined style for clarity and consistency. The primary icon color uses turquoise for interactive emphasis.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {icons.map((icon) => (
          <div key={icon.name} className="col-span-3">
            <div className="h-32 bg-[#404040] border border-[#F5F1E8]/10 rounded mb-4 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#1C8C8B]">
                {icon.svg}
              </svg>
            </div>
            <p className="text-sm text-[#F5F1E8]">{icon.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ResponsiveDesignSection() {
  const breakpoints = [
    { device: 'Mobile', width: '<768px' },
    { device: 'Tablet', width: '768-1024px' },
    { device: 'Desktop', width: '1024-1440px' },
    { device: 'Large Desktop', width: '1440px+' },
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">03 / Foundations</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Responsive Design</h2>
        <p className="text-lg text-[#B8B1A6] max-w-3xl leading-relaxed">
          The layout adapts across screen sizes while maintaining hierarchy and spacing.
        </p>
      </div>

      <div className="bg-[#404040] border border-[#F5F1E8]/10 rounded overflow-hidden">
        {breakpoints.map((bp, i) => (
          <div key={bp.device} className={`grid grid-cols-12 px-6 py-4 ${i !== breakpoints.length - 1 ? 'border-b border-[#F5F1E8]/10' : ''}`}>
            <p className="col-span-6 text-[#F5F1E8]">{bp.device}</p>
            <p className="col-span-6 text-[#B8B1A6] font-mono">{bp.width}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ElevationSection() {
  const elevations = [
    { level: '1', shadow: '0 2px 6px rgba(0, 0, 0, 0.38), 0 8px 18px rgba(0, 0, 0, 0.3)', usage: 'Cards, containers' },
    { level: '2', shadow: '0 4px 12px rgba(0, 0, 0, 0.42), 0 14px 28px rgba(0, 0, 0, 0.34)', usage: 'Dropdowns, popovers' },
    { level: '3', shadow: '0 8px 18px rgba(0, 0, 0, 0.48), 0 22px 40px rgba(0, 0, 0, 0.4)', usage: 'Modals, dialogs' },
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">03 / Foundations</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Elevation</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Subtle elevation and shadows help separate interface layers and indicate interaction. Cards, dropdowns, and other components use light shadows to create hierarchy without adding visual clutter.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {elevations.map((elevation, index) => (
          <div key={index} className="col-span-3">
            <div className="h-48 bg-[#242424] border border-[#F5F1E8]/10 rounded mb-6 flex items-center justify-center" style={{ boxShadow: elevation.shadow }}>
              <span className="text-4xl text-[#F5F1E8]/20 font-light">{elevation.level}</span>
            </div>
            <p className="text-sm text-[#F5F1E8] mb-2">Level {elevation.level}</p>
            <p className="text-xs text-[#B8B1A6]">{elevation.usage}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WireframesSection() {
  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">05 / Application</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Wireframes</h2>
        <p className="text-lg text-[#B8B1A6] max-w-3xl leading-relaxed">
          This section is reserved for portfolio wireframe visuals. I will later add images of my wireframe.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6 h-64 rounded border-2 border-dashed border-[#F5F1E8]/25 bg-[#404040]" />
        <div className="col-span-6 h-64 rounded border-2 border-dashed border-[#F5F1E8]/25 bg-[#404040]" />
      </div>
    </section>
  );
}

export function PortfolioMockupsSection() {
  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">05 / Application</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Portfolio Mockups</h2>
        <p className="text-lg text-[#B8B1A6] max-w-3xl leading-relaxed">
          This section is reserved for high-fidelity portfolio mockups. Add your final screen mockups here.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8 h-80 rounded border-2 border-dashed border-[#F5F1E8]/25 bg-[#404040]" />
        <div className="col-span-4 h-80 rounded border-2 border-dashed border-[#F5F1E8]/25 bg-[#404040]" />
      </div>
    </section>
  );
}
