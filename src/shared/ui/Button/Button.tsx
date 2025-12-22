import { ButtonHTMLAttributes, FC } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type TVariant = 'primary';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
}

export const Button: FC<IProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
