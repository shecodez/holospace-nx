import { useState } from 'react';

import {
  Button,
  buttonRadii,
  ButtonRadius,
  ButtonSize,
  buttonSizes,
  ButtonVariant,
  buttonVariants,
} from './button';

interface ButtonDemoProps {
  color: string;
  isCompact: boolean;
  isDisabled: boolean;
  isUppercase: boolean;
  radius: ButtonRadius;
  size: ButtonSize;
  variant: ButtonVariant;
}

export function ButtonDemo(props: ButtonDemoProps) {
  const [variant, setVariant] = useState<ButtonVariant>(props.variant);
  const [color, setColor] = useState<string>(props.color);
  const [radius, setRadius] = useState<ButtonRadius>(props.radius);
  const [size, setSize] = useState<ButtonSize>(props.size);
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
        {/* TODO: replace these with dock-ui components: select checkbox slider switch TextInput */}
        <aside className="flex flex-col gap-2 p-4">
          <div>
            <label>Variant</label>
            <select>
              {buttonVariants.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
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
              {buttonRadii.map((x, i) => (
                <input type="radio" key={i} title={x} checked={x === radius} />
              ))}
            </div>
          </div>

          <div>
            <label>Size</label>
            <div className="flex">
              {buttonSizes.map((x, i) => (
                <input type="radio" key={i} title={x} checked={x === size} />
              ))}
            </div>
          </div>

          <div>
            <label>Is Compact</label>
            <button onClick={() => setCompact(!compact)}>
              compact: {compact}
            </button>
          </div>

          <div>
            <label>Is Disabled</label>
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
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ButtonDemo;
