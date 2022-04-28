import { useState } from 'react';

import { Button } from './button';

type RadiusTypes = 'none' | 'sm' | 'rounded' | 'md' | 'lg' | 'xl' | 'full';
type SizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type VariantTypes =
  | 'filled'
  | 'light'
  | 'outline'
  | 'default'
  | 'ghost'
  | 'white';
interface ButtonDemoProps {
  color: string;
  isCompact: boolean;
  isDisabled: boolean;
  radius: RadiusTypes;
  size: SizeTypes;
  isUppercase: boolean;
  variant: VariantTypes;
}

export function ButtonDemo(props: ButtonDemoProps) {
  const [variant, setVariant] = useState<VariantTypes>(props.variant);
  const [color, setColor] = useState<string>(props.color);
  const [radius, setRadius] = useState<RadiusTypes>(props.radius);
  const [size, setSize] = useState<SizeTypes>(props.size);
  const [disabled, setDisabled] = useState<boolean>(props.isDisabled);
  const [compact, setCompact] = useState<boolean>(props.isCompact);
  const [uppercase, setUppercase] = useState<boolean>(props.isUppercase);
  const [text, setText] = useState<string>('Upload');

  return (
    <div className="flex border rounded shadow">
      <div className="w-2/3 flex items-center justify-center">
        <Button
          variant={variant}
          color={color}
          radius={radius}
          size={size}
          isDisabled={disabled}
          isCompact={compact}
          isUppercase={uppercase}
        >
          {text}
        </Button>
      </div>

      <div className="w-1/3 border-l">
        {/* TODO: replace these with dock-ui components: select checkbox slider switch and inputField */}
        <aside className="flex flex-col gap-2 p-4">
          <div>
            <label>Variant</label>
            <select>
              <option>filled</option>
              <option>light</option>
            </select>
          </div>

          <div>
            <label>Color</label>
            <div className="grid grid-cols-3">
              <input
                type="checkbox"
                checked
                className="w-2 aspect-square bg-primary-default"
              />
              <input
                type="checkbox"
                className="w-2 aspect-square bg-secondary-default"
              />
              <input
                type="checkbox"
                className="w-2 aspect-square bg-accent-default"
              />
            </div>
          </div>

          <div>
            <label>Radius</label>
            <div className="flex">
              <input type="radio" title="none" />
              <input type="radio" title="sm" />
              <input type="radio" checked title="rounded" />
            </div>
          </div>

          <div>
            <label>Size</label>
            <div className="flex">
              <input type="radio" title="xs" />
              <input type="radio" checked title="sm" />
              <input type="radio" title="md" />
            </div>
          </div>

          <div>
            <label>Is Compact</label>
            <button onClick={() => setCompact(!compact)}>
              compact: {compact}
            </button>
          </div>

          <div>
            <label>Is Compact</label>
            <button onClick={() => setDisabled(!disabled)}>
              disabled: {disabled}
            </button>
          </div>

          <div>
            <label>Is Uppercase</label>
            <button onClick={() => setUppercase(!uppercase)}>
              uppercase: {uppercase}
            </button>
          </div>

          <div>
            <label>Text</label>
            <input type="text" value={text} onChange={() => setText} />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ButtonDemo;
