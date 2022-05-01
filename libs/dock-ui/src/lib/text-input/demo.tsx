import { useState } from 'react';

import {
  TextInput,
  InputRadius,
  InputSize,
  InputVariant,
  inputVariants,
  inputRadii,
  inputSizes,
} from './text-input';

interface InputDemoProps {
  color: string;
  hint: string;
  error: string;
  isDisabled: boolean;
  isRequired: boolean;
  label: string;
  radius: InputRadius;
  size: InputSize;
  variant: InputVariant; // default filled
}

export function TextInputDemo(props: InputDemoProps) {
  const [variant, setVariant] = useState<InputVariant>(props.variant);
  const [color, setColor] = useState<string>(props.color);
  const [radius, setRadius] = useState<InputRadius>(props.radius);
  const [size, setSize] = useState<InputSize>(props.size);
  const [disabled, setDisabled] = useState<boolean>(props.isDisabled);
  const [required, setRequired] = useState<boolean>(true);
  const [label, setLabel] = useState<string>('E-Mail');
  const [placeholder, setPlaceholder] = useState<string>('E-Mail Address');
  const [hint, setHint] = useState<string>(props.hint);
  const [error, setError] = useState<string>(props.error);
  const [value, setValue] = useState<string>('');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <div className="flex border rounded shadow">
      <div className="w-2/3 flex items-center justify-center">
        <TextInput
          id="demo"
          value={value}
          //onChange={handleChange}
          variant={variant}
          color={color}
          radius={radius}
          size={size}
          isDisabled={disabled}
          isRequired={required}
          label={label}
          placeholder={placeholder}
          hint={hint}
          error={error}
        />
      </div>

      <div className="w-1/3 border-l">
        {/* TODO: replace these with dock-ui components: select checkbox slider switch TextInput */}
        <aside className="flex flex-col gap-2 p-4">
          <div>
            <label>Variant</label>
            <select>
              {inputVariants.map((x, i) => (
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
              {inputRadii.map((x, i) => (
                <input type="radio" key={i} title={x} checked={x === radius} />
              ))}
            </div>
          </div>

          <div>
            <label>Size</label>
            <div className="flex">
              {inputSizes.map((x, i) => (
                <input type="radio" key={i} title={x} checked={x === size} />
              ))}
            </div>
          </div>

          <div>
            <label>Is Required</label>
            <button onClick={() => setRequired(!required)}>
              required: {required}
            </button>
          </div>

          <div>
            <label>Is Disabled</label>
            <button onClick={() => setDisabled(!disabled)}>
              disabled: {disabled}
            </button>
          </div>

          <div>
            <label>Label</label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.currentTarget.value)}
            />
          </div>

          <div>
            <label>Placeholder</label>
            <input
              type="text"
              value={placeholder}
              onChange={(e) => setPlaceholder(e.currentTarget.value)}
            />
          </div>

          <div>
            <label>Hint</label>
            <input
              type="text"
              value={hint}
              onChange={(e) => setHint(e.currentTarget.value)}
            />
          </div>

          <div>
            <label>Error</label>
            <input
              type="text"
              value={error}
              onChange={(e) => setError(e.currentTarget.value)}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default TextInputDemo;
