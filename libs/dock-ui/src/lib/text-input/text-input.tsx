import { ReactNode } from 'react';

import styles from './text-input.module.css';

export const inputRadii = ['none', 'sm', 'rounded', 'md', 'lg', 'xl'] as const;
export type InputRadius = typeof inputRadii[number];
export const inputSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type InputSize = typeof inputSizes[number];
export type InputType =
  | 'number'
  | 'search'
  | 'text'
  | 'tel'
  | 'url'
  | 'email'
  | 'password';
export const inputVariants = ['filled', 'ghost', 'outline'] as const;
export type InputVariant = typeof inputVariants[number];

/* eslint-disable-next-line */
export interface TextInputProps {
  color?: string;
  hint?: ReactNode; // Input hint, displayed after label
  error: ReactNode; // Displays error message after input
  id?: string; // auto generate?
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isRequired?: boolean;
  label?: ReactNode;
  leftNode?: ReactNode; // left element of input
  //leftElWidth?: number; // width of element, used to calculate input padding-left
  placeholder?: string;
  radius: InputRadius;
  rightNode?: ReactNode; // right element of input
  //rightElWidth?: number; // width of element, used to calculate input padding-right
  size?: InputSize;
  type?: InputType; // default : text
  value?: string;
  variant?: InputVariant; // default filled
}

function getPadding(size?: InputSize): string {
  if (!size) size = 'sm';

  switch (size) {
    case 'xs':
      return 'h-10 px-2.5';
    case 'sm':
      return 'h-12 px-2.5';
    case 'lg':
      return 'h-16 px-3';
    case 'xl':
      return 'h-18 px-3';
    case 'md':
    default:
      return 'h-14 px-4';
  }
}

function getBorderRadius(radius?: InputRadius): string {
  if (!radius) return 'rounded';

  switch (radius) {
    case 'none':
      return 'rounded-none';
    case 'sm':
      return 'rounded-sm';
    case 'md':
      return 'rounded-md';
    case 'lg':
      return 'rounded-lg';
    case 'xl':
      return 'rounded-xl';
    // case 'full':
    //   return 'rounded-full';
    default:
      return 'rounded';
  }
}

export function TextInput(props: TextInputProps) {
  const {
    color = 'primary',
    radius,
    size,
    type = 'text',
    variant = 'filled',
    value,

    isDisabled,
    isFullWidth,
    isRequired,

    ...rest // id, type,
  } = props;

  const twcss = `${getBorderRadius(radius)} ${
    isFullWidth && 'w-full'
  } ${getPadding(size)}`;

  const duicss = `${styles['dui-text-input']} ${styles[`var-${variant}`]} ${
    styles[`c-${color}`]
  } ${isRequired && styles['required']} ${isDisabled && styles['disabled']} ${
    props.error && styles['error']
  }`;

  return (
    <div className={`${twcss} ${duicss}`.replace(/undefined/g, '').trim()}>
      <div className={styles['inner']}>
        <div className={styles['left-node']}>{props.leftNode}</div>

        <div
          className={`${styles['input-wrapper']} ${
            value && styles['has-text']
          }`}
        >
          <input
            id={props.id}
            type={type}
            placeholder={props.placeholder}
            disabled={!!isDisabled}
            required={!!isRequired}
            pattern="\S+"
            data-testid="dui-text-input"
            value={value}
            {...rest}
          />
          <label htmlFor={props.id} className={styles['label']}>
            {props.label}
          </label>
        </div>

        <div className={styles['right-node']}>{props.rightNode}</div>
      </div>

      {props.error ? (
        <span className={styles['error']}>{props.error}</span>
      ) : (
        <span className={styles['hint']}>{props.hint}</span>
      )}
    </div>
  );
}

export default TextInput;
