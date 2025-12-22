import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type TVariant = 'primary';
type TSize = 'big' | 'small';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
  size?: TSize;
}

export const Button: FC<IProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'small',
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
