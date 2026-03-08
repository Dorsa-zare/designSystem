import { useState } from 'react';

export function ButtonsSection() {
  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">07 / Components</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Buttons</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Primary actions in turquoise, secondary in neutral, ghost for tertiary actions.
        </p>
      </div>

      {/* Primary Buttons */}
      <div className="mb-16">
        <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-8">Primary</h4>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 flex flex-col gap-4">
            <button className="px-8 py-4 bg-[#1C8C8B] text-white rounded transition-colors hover:bg-[#2BA6A5]">
              Button
            </button>
            <p className="text-xs text-[#B8B1A6]">Default state</p>
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <button className="px-8 py-4 bg-[#2BA6A5] text-white rounded">
              Button
            </button>
            <p className="text-xs text-[#B8B1A6]">Hover state</p>
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <button className="px-8 py-4 bg-[#157372] text-white rounded">
              Button
            </button>
            <p className="text-xs text-[#B8B1A6]">Active state</p>
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <button className="px-8 py-4 bg-[#D4D4D4] text-[#737373] rounded cursor-not-allowed">
              Button
            </button>
            <p className="text-xs text-[#B8B1A6]">Disabled state</p>
          </div>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="mb-16">
        <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-8">Secondary</h4>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 flex flex-col gap-4">
            <button className="px-8 py-4 bg-transparent text-[#F5F1E8] border border-[#F5F1E8]/35 rounded hover:bg-[#F5F1E8] hover:text-[#1A1A1A] transition-colors">
              Button
            </button>
            <p className="text-xs text-[#B8B1A6]">Default state</p>
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <button className="px-8 py-4 bg-[#F5F1E8] text-[#1A1A1A] border border-[#F5F1E8] rounded">
              Button
            </button>
            <p className="text-xs text-[#B8B1A6]">Hover state</p>
          </div>
        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="mb-16">
        <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-8">Ghost</h4>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 flex flex-col gap-4">
            <button className="px-8 py-4 bg-transparent text-[#F5F1E8] rounded hover:bg-[#F5F1E8]/8 transition-colors">
              Button
            </button>
            <p className="text-xs text-[#B8B1A6]">Default state</p>
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <button className="px-8 py-4 bg-[#F5F1E8]/10 text-[#F5F1E8] rounded">
              Button
            </button>
            <p className="text-xs text-[#B8B1A6]">Hover state</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImageAspectRatioSection() {
  const ratios = [
    { label: '1:1', usage: 'Thumbnails and project previews', className: 'aspect-square' },
    { label: '4:3', usage: 'Content images', className: 'aspect-[4/3]' },
    { label: '16:9', usage: 'Banners or video', className: 'aspect-video' },
  ];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">08 / Foundations</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Image Aspect Ratio</h2>
        <p className="text-lg text-[#B8B1A6] max-w-3xl leading-relaxed">
          Standardized image ratios keep the layout balanced across content types.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-8">
        {ratios.map((ratio) => (
          <div key={ratio.label} className="col-span-4">
            <div className={`w-full bg-[#404040] border border-[#F5F1E8]/12 rounded ${ratio.className}`} />
            <p className="text-sm text-[#F5F1E8] mt-4 mb-1">{ratio.label}</p>
            <p className="text-xs text-[#B8B1A6]">{ratio.usage}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function InputsSection() {
  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">08 / Components</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Text Inputs</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Clean, minimal input fields with clear focus states.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Default */}
        <div className="col-span-6">
          <label className="block text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-4">Default</label>
          <input
            type="text"
            placeholder="Enter text"
            className="w-full px-6 py-4 border border-[#F5F1E8]/18 rounded bg-[#242424] text-[#F5F1E8] focus:border-[#1C8C8B] focus:outline-none transition-colors"
          />
          <p className="text-xs text-[#B8B1A6] mt-3">Helper text goes here</p>
        </div>

        {/* Focused */}
        <div className="col-span-6">
          <label className="block text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-4">Focused</label>
          <input
            type="text"
            placeholder="Enter text"
            className="w-full px-6 py-4 border border-[#1C8C8B] rounded bg-[#242424] text-[#F5F1E8] outline-none"
          />
        </div>

        {/* Error */}
        <div className="col-span-6">
          <label className="block text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-4">Error</label>
          <input
            type="text"
            placeholder="Enter text"
            className="w-full px-6 py-4 border border-[#DC2626] rounded bg-[#242424] text-[#F5F1E8] focus:outline-none"
          />
          <p className="text-xs text-[#DC2626] mt-3">Error message goes here</p>
        </div>

        {/* Disabled */}
        <div className="col-span-6">
          <label className="block text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-4">Disabled</label>
          <input
            type="text"
            placeholder="Enter text"
            disabled
            className="w-full px-6 py-4 border border-[#F5F1E8]/10 rounded bg-[#202020] text-[#8D877F] cursor-not-allowed"
          />
        </div>
      </div>
    </section>
  );
}

export function CheckboxSection() {
  const [checked, setChecked] = useState(true);

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">09 / Components</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Checkbox</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Single checkbox style using turquoise for checked state.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6">
          <label className="flex items-center gap-4 cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="w-6 h-6 rounded border border-[#D4D4D4] bg-[#242424] accent-[#1C8C8B] cursor-pointer"
            />
            <span className="text-[#F5F1E8]">Enable portfolio updates</span>
          </label>
        </div>
      </div>
    </section>
  );
}

export function RadioButtonSection() {
  const [selected, setSelected] = useState('option1');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">10 / Components</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Radio Button</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Radio button group with turquoise selected state.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6 space-y-5">
          {options.map((option, idx) => (
            <label key={option} className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="restored-radio-group"
                value={`option${idx + 1}`}
                checked={selected === `option${idx + 1}`}
                onChange={(e) => setSelected(e.target.value)}
                className="w-6 h-6 border border-[#D4D4D4] bg-[#242424] accent-[#1C8C8B] cursor-pointer"
              />
              <span className="text-[#F5F1E8]">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DropdownSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Select an option');

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">10 / Components</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Dropdown Menu</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Simple dropdown with clear hierarchy and hover states.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6">
          <label className="block text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-4">Dropdown Label</label>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-6 py-4 border border-[#F5F1E8]/18 bg-[#242424] rounded text-left flex items-center justify-between hover:border-[#1C8C8B] transition-colors"
            >
              <span className={selected === 'Select an option' ? 'text-[#8D877F]' : 'text-[#F5F1E8]'}>
                {selected}
              </span>
              <svg
                className={`w-5 h-5 text-[#B8B1A6] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div
                className="absolute top-full left-0 right-0 mt-2 bg-[#242424] border border-[#F5F1E8]/12 rounded overflow-hidden z-10"
                style={{ boxShadow: '0 14px 28px rgba(245, 241, 232, 0.1)' }}
              >
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                    className="w-full px-6 py-4 text-left text-[#F5F1E8] hover:bg-[#F5F1E8]/8 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CardSection() {
  const level0 = 'inset 0 1px 0 rgba(255, 255, 255, 0.02)';
  const level1 =
    '0 1px 2px rgba(0, 0, 0, 0.42), 0 8px 16px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.04)';
  const level2 =
    '0 2px 4px rgba(0, 0, 0, 0.46), 0 14px 28px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.05)';
  const level3 =
    '0 4px 10px rgba(0, 0, 0, 0.52), 0 22px 42px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.06)';

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">11 / Components</p>
        <h2 className="text-5xl font-light text-[#D4AC4C] mb-8 leading-tight">Card Component</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Flexible container for grouping related content with subtle elevation.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Basic Card */}
        <div className="col-span-4">
          <div className="p-8 bg-[#404040] border border-[#F5F1E8]/10 rounded" style={{ boxShadow: level0 }}>
            <h4 className="text-xl font-light text-[#F5F1E8] mb-4 leading-tight">Basic Card</h4>
            <p className="text-[#B8B1A6] leading-relaxed mb-6">
              Base card using level 0 elevation for flat, stable surfaces.
            </p>
            <button className="text-[#1C8C8B] hover:text-[#2BA6A5] transition-colors text-sm">
              Learn more {'->'}
            </button>
          </div>
        </div>

        {/* Elevated Card */}
        <div className="col-span-4">
          <div
            className="p-8 bg-[#404040] border border-[#F5F1E8]/10 rounded"
            style={{ boxShadow: level1 }}
          >
            <h4 className="text-xl font-light text-[#F5F1E8] mb-4 leading-tight">Elevated Card</h4>
            <p className="text-[#B8B1A6] leading-relaxed mb-6">
              Uses level 1 layered shadow for default floating content.
            </p>
            <button className="text-[#1C8C8B] hover:text-[#2BA6A5] transition-colors text-sm">
              Learn more {'->'}
            </button>
          </div>
        </div>

        {/* Interactive Card */}
        <div className="col-span-4">
          <div
            className="p-8 bg-[#404040] border border-[#F5F1E8]/10 rounded hover:border-[#1C8C8B] transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
            style={{ boxShadow: level2 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = level3;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = level2;
            }}
          >
            <h4 className="text-xl font-light text-[#F5F1E8] mb-4 leading-tight">Interactive Card</h4>
            <p className="text-[#B8B1A6] leading-relaxed mb-6">
              Starts at level 2 and rises to level 3 on hover for clear interaction depth.
            </p>
            <span className="text-[#1C8C8B] text-sm">
              Click to action {'->'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

