export function PrinciplesSection() {
  const principles = [
    {
      title: 'Clarity Through Simplicity',
      description: 'Every element serves a purpose. Remove the unnecessary to let the essential speak clearly.'
    },
    {
      title: 'Architectural Foundation',
      description: 'Structure guides experience. A strong grid and consistent spacing create visual rhythm and predictability.'
    },
    {
      title: 'Purposeful Color',
      description: 'Color communicates meaning, not decoration. Use restraint to create impact.'
    },
    {
      title: 'Cultural Subtlety',
      description: 'Persian heritage expressed through refined color choices rather than literal ornamentation.'
    }
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">01 / Introduction</p>
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Guiding Principles</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          The foundation of this design system is built on clarity, structure, and cultural nuance.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {principles.map((principle, index) => (
          <div key={index} className="col-span-6">
            <div className="h-full border-l border-[#F5F1E8]/10 pl-8 py-8">
              <h3 className="text-2xl font-light text-[#F5F1E8] mb-6 leading-tight">{principle.title}</h3>
              <p className="text-[#B8B1A6] leading-relaxed">{principle.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ColorSection() {
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
            <div 
              className="h-40 rounded mb-4 border border-[#F5F1E8]/10"
              style={{ backgroundColor: color.hex }}
            />
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
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">02 / Foundations</p>
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Color System</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          A refined palette expressing Persian heritage through turquoise and saffron, balanced with neutral grays.
        </p>
      </div>

      <div className="mb-16">
        <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-8">Neutrals</h4>
        <div className="grid grid-cols-12 gap-6">
          {neutrals.map((color, index) => (
            <div key={index} className="col-span-2">
              <div 
                className="h-32 rounded mb-3 border border-[#F5F1E8]/10"
                style={{ backgroundColor: color.hex }}
              />
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
              <div 
                className="h-32 rounded mb-3 border border-[#F5F1E8]/10"
                style={{ backgroundColor: color.hex }}
              />
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
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Typography</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          A clear type scale using modern sans-serif fonts for legibility and professionalism.
        </p>
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
                <div 
                  className="text-[#F5F1E8]"
                  style={{ 
                    fontSize: type.size, 
                    lineHeight: type.lineHeight,
                    fontWeight: type.weight
                  }}
                >
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
  const spacingScale = [
    { token: '4', px: '4px', rem: '0.25rem' },
    { token: '8', px: '8px', rem: '0.5rem' },
    { token: '16', px: '16px', rem: '1rem' },
    { token: '24', px: '24px', rem: '1.5rem' },
    { token: '32', px: '32px', rem: '2rem' },
    { token: '48', px: '48px', rem: '3rem' },
    { token: '64', px: '64px', rem: '4rem' },
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">04 / Foundations</p>
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Spacing Scale</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          8pt grid system for consistent spacing and alignment across all components.
        </p>
      </div>

      <div className="space-y-8">
        {spacingScale.map((space, index) => (
          <div key={index} className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-2">
              <p className="text-sm font-mono text-[#F5F1E8] mb-1">{space.token}pt</p>
              <p className="text-xs text-[#B8B1A6]">{space.px}</p>
            </div>
            <div className="col-span-10">
              <div
                className="h-12 bg-[#D4AC4C]/18 border border-[#D4AC4C]/45 rounded"
                style={{ width: space.px }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function GridSection() {
  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">05 / Foundations</p>
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Grid System</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          12-column grid with 32px gutters for flexible, responsive layouts.
        </p>
      </div>

      <div className="bg-[#F5F1E8]/[0.03] p-12 rounded">
        <div className="grid grid-cols-12 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-48 rounded flex items-end justify-center pb-4 border bg-[#D4AC4C]/18 border-[#D4AC4C]/45"
            >
              <span className="text-xs font-mono text-[#D4AC4C]">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <p className="text-xs text-[#D4AC4C] mb-2 uppercase tracking-widest">Columns</p>
          <p className="text-[#F5F1E8] text-xl font-light">12</p>
        </div>
        <div className="col-span-3">
          <p className="text-xs text-[#D4AC4C] mb-2 uppercase tracking-widest">Gutter</p>
          <p className="text-[#F5F1E8] text-xl font-light">32px</p>
        </div>
        <div className="col-span-3">
          <p className="text-xs text-[#D4AC4C] mb-2 uppercase tracking-widest">Margin</p>
          <p className="text-[#F5F1E8] text-xl font-light">Fluid</p>
        </div>
        <div className="col-span-3">
          <p className="text-xs text-[#D4AC4C] mb-2 uppercase tracking-widest">Max Width</p>
          <p className="text-[#F5F1E8] text-xl font-light">1440px</p>
        </div>
      </div>
    </section>
  );
}

export function ElevationSection() {
  const elevations = [
    { level: '0', shadow: 'none', usage: 'Flat surfaces' },
    { level: '1', shadow: '0 3px 10px rgba(245, 241, 232, 0.08)', usage: 'Cards, containers' },
    { level: '2', shadow: '0 8px 18px rgba(245, 241, 232, 0.1)', usage: 'Dropdowns, popovers' },
    { level: '3', shadow: '0 14px 30px rgba(245, 241, 232, 0.12)', usage: 'Modals, dialogs' },
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">06 / Foundations</p>
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Elevation</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Subtle shadows to create depth and hierarchy in the interface.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {elevations.map((elevation, index) => (
          <div key={index} className="col-span-3">
            <div 
              className="h-48 bg-[#242424] border border-[#F5F1E8]/10 rounded mb-6 flex items-center justify-center"
              style={{ boxShadow: elevation.shadow }}
            >
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
