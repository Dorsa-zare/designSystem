import { useState } from 'react';

export function ButtonsSection() {
  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">07 / Components</p>
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Buttons</h2>
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

export function InputsSection() {
  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">08 / Components</p>
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Text Inputs</h2>
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

export function CheckboxesSection() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [radio, setRadio] = useState('option1');

  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">09 / Components</p>
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Selection Controls</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Simple selection controls with clear checked states.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-16">
        {/* Checkboxes */}
        <div className="col-span-6">
          <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-8">Checkboxes</h4>
          <div className="space-y-6">
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={checkbox1}
                onChange={(e) => setCheckbox1(e.target.checked)}
                className="w-6 h-6 rounded border border-[#D4D4D4] text-[#1C8C8B] focus:ring-[#1C8C8B] focus:ring-2 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-[#F5F1E8]">Checkbox option</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={checkbox2}
                onChange={(e) => setCheckbox2(e.target.checked)}
                className="w-6 h-6 rounded border border-[#D4D4D4] text-[#1C8C8B] focus:ring-[#1C8C8B] focus:ring-2 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-[#F5F1E8]">Checked option</span>
            </label>
            <label className="flex items-center gap-4 cursor-not-allowed opacity-40">
              <input
                type="checkbox"
                disabled
                className="w-6 h-6 rounded border border-[#D4D4D4] cursor-not-allowed"
              />
              <span className="text-[#F5F1E8]">Disabled option</span>
            </label>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="col-span-6">
          <h4 className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-8">Radio Buttons</h4>
          <div className="space-y-6">
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="radio-group"
                value="option1"
                checked={radio === 'option1'}
                onChange={(e) => setRadio(e.target.value)}
                className="w-6 h-6 border border-[#D4D4D4] text-[#1C8C8B] focus:ring-[#1C8C8B] focus:ring-2 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-[#F5F1E8]">Radio option 1</span>
            </label>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="radio"
                name="radio-group"
                value="option2"
                checked={radio === 'option2'}
                onChange={(e) => setRadio(e.target.value)}
                className="w-6 h-6 border border-[#D4D4D4] text-[#1C8C8B] focus:ring-[#1C8C8B] focus:ring-2 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-[#F5F1E8]">Radio option 2</span>
            </label>
            <label className="flex items-center gap-4 cursor-not-allowed opacity-40">
              <input
                type="radio"
                name="radio-group"
                disabled
                className="w-6 h-6 border border-[#D4D4D4] cursor-not-allowed"
              />
              <span className="text-[#F5F1E8]">Disabled option</span>
            </label>
          </div>
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
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Dropdown Menu</h2>
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
  return (
    <section className="mb-48">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/40 mb-6">11 / Components</p>
        <h2 className="text-5xl font-light text-[#F5F1E8] mb-8 leading-tight">Card Component</h2>
        <p className="text-lg text-[#B8B1A6] max-w-2xl leading-relaxed">
          Flexible container for grouping related content with subtle elevation.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Basic Card */}
        <div className="col-span-4">
          <div className="p-8 bg-[#242424] border border-[#F5F1E8]/10 rounded">
            <h4 className="text-xl font-light text-[#F5F1E8] mb-4 leading-tight">Basic Card</h4>
            <p className="text-[#B8B1A6] leading-relaxed mb-6">
              Simple card with border and minimal styling for content organization.
            </p>
            <button className="text-[#1C8C8B] hover:text-[#2BA6A5] transition-colors text-sm">
              Learn more {'->'}
            </button>
          </div>
        </div>

        {/* Elevated Card */}
        <div className="col-span-4">
          <div
            className="p-8 bg-[#242424] border border-[#F5F1E8]/10 rounded"
            style={{ boxShadow: '0 12px 24px rgba(245, 241, 232, 0.08)' }}
          >
            <h4 className="text-xl font-light text-[#F5F1E8] mb-4 leading-tight">Elevated Card</h4>
            <p className="text-[#B8B1A6] leading-relaxed mb-6">
              Card with shadow for additional emphasis and visual hierarchy.
            </p>
            <button className="text-[#1C8C8B] hover:text-[#2BA6A5] transition-colors text-sm">
              Learn more {'->'}
            </button>
          </div>
        </div>

        {/* Interactive Card */}
        <div className="col-span-4">
          <div
            className="p-8 bg-[#242424] border border-[#F5F1E8]/10 rounded hover:border-[#1C8C8B] transition-all cursor-pointer"
            style={{ boxShadow: '0 8px 18px rgba(245, 241, 232, 0.05)' }}
          >
            <h4 className="text-xl font-light text-[#F5F1E8] mb-4 leading-tight">Interactive Card</h4>
            <p className="text-[#B8B1A6] leading-relaxed mb-6">
              Hover to see the interactive state with border and shadow.
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
