import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

import s from './Line.module.scss';

interface IProps extends HTMLAttributes<HTMLHRElement> {}

export const Line: FC<IProps> = ({ className, ...props }) => {
  return <hr className={cn(s.line, className)} {...props} />;
};
