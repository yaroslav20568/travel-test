import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './Line.module.scss';

interface IProps extends HTMLAttributes<HTMLHRElement> {}

export const Line: FC<IProps> = ({ className, ...props }) => {
  return <hr className={cn(styles.line, className)} {...props} />;
};
