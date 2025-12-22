import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

type TVariant = 'primary';
type TSize = 'big' | 'medium' | 'small';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
  size?: TSize;
  fullWidth?: boolean;
}

export const Button: FC<IProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        s.button,
        s[variant],
        s[size],
        fullWidth && s.fullWidth,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
