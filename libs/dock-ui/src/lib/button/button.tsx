import { ReactNode } from 'react';
import { Icon } from '@iconify/react';

import styles from './button.module.css';

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: ReactNode;
  color?: string;
  isCompact?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  leftIcon?: ReactNode;
  isLoading?: boolean;
  radius?: 'none' | 'sm' | 'rounded' | 'md' | 'lg' | 'xl' | 'full';
  isRatio1x1?: boolean;
  rightIcon?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type?: 'button' | 'reset' | 'submit';
  isUppercase?: boolean;
  variant?: 'filled' | 'light' | 'outline' | 'default' | 'ghost' | 'white';
}

function getPadding(size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string {
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

function getBorderRadius(
  radius?: 'none' | 'sm' | 'rounded' | 'md' | 'lg' | 'xl' | 'full'
): string {
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

  const twcss = ` ${getBorderRadius(radius)} 
  ${isFullWidth && 'w-full'} ${isUppercase && 'uppercase'} 
  ${getPadding(size)} ${isRatio1x1 && 'aspect-square'}`;

  const duicss = `${styles['dui-btn']}
  ${styles[`dui-var-${variant}`]} ${styles[`dui-c-${color}`]} 
  ${isCompact && styles['dui-btn-compact']} 
  ${isDisabled && styles['dui-btn-disabled']} 
  ${isLoading && styles['dui-btn-loading']}`;

  return (
    <button
      type={type}
      className={`${twcss} ${duicss}`}
      data-testid="dui-btn"
      {...rest}
    >
      <div className={styles['dui-btn-inner']}>
        {isLoading ? (
          <div className="animate-spin">
            <Icon icon="mdi:loading" />
          </div>
        ) : (
          props.leftIcon
        )}

        <span className={styles['dui-btn-label']}>{props.children}</span>

        {props.rightIcon}
      </div>
    </button>
  );
}

export default Button;
