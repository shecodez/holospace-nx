import { ReactNode } from 'react';
import { Icon } from '@iconify/react';

import styles from './button.module.css';

export const buttonRadii = [
  'none',
  'sm',
  'rounded',
  'md',
  'lg',
  'xl',
  'full',
] as const;
export type ButtonRadius = typeof buttonRadii[number];
export const buttonSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export type ButtonSize = typeof buttonSizes[number];
export const buttonVariants = [
  'filled',
  'light',
  'outline',
  'default',
  'ghost',
  'white',
] as const;
export type ButtonVariant = typeof buttonVariants[number];
export type ButtonType = 'button' | 'reset' | 'submit';

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: ReactNode;
  color?: string;
  isCompact?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  isRatio1x1?: boolean;
  isUppercase?: boolean;
  leftIcon?: ReactNode;
  radius?: ButtonRadius;
  rightIcon?: ReactNode;
  size?: ButtonSize;
  type?: ButtonType;
  variant?: ButtonVariant;
}

function getPadding(size?: ButtonSize): string {
  if (!size) size = 'sm';

  switch (size) {
    case 'xs':
      return 'h-5 px-3';
    case 'sm':
      return 'h-9 px-4';
    case 'lg':
      return 'h-12 px-6';
    case 'xl':
      return 'h-16 px-8';
    case 'md':
    default:
      return 'h-10 px-5';
  }
}

function getBorderRadius(radius?: ButtonRadius): string {
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
    case 'full':
      return 'rounded-full';
    default:
      return 'rounded';
  }
}

export function Button(props: ButtonProps) {
  const {
    color = 'primary',
    radius,
    size,
    type = 'button',
    variant = 'filled',

    isCompact,
    isDisabled,
    isFullWidth,
    isLoading,
    isRatio1x1,
    isUppercase,

    ...rest
  } = props;

  const twcss = `${getBorderRadius(radius)} ${isFullWidth && 'w-full'} ${
    isUppercase && 'uppercase'
  } ${getPadding(size)} ${isRatio1x1 && 'aspect-square'}`;

  const duicss = `${styles['dui-btn']} ${styles[`var-${variant}`]} ${
    styles[`c-${color}`]
  } ${isCompact && styles['compact']} ${isDisabled && styles['disabled']} ${
    isLoading && styles['loading']
  }`;

  return (
    <button
      type={type}
      className={`${twcss} ${duicss}`.replace(/undefined/g, '').trim()}
      data-testid="dui-btn"
      {...rest}
    >
      <div className={styles['inner']}>
        {/* TODO: replace with loading component */}
        {isLoading ? (
          <div className="animate-spin">
            <Icon icon="mdi:loading" />
          </div>
        ) : (
          props.leftIcon
        )}

        <span className={styles['label']}>{props.children}</span>

        {props.rightIcon}
      </div>
    </button>
  );
}

export default Button;
