import { ServicesList } from '@/widgets';

import s from './ServicesPage.module.scss';

export const ServicesPage = () => {
  return (
    <div className={s.servicesPage}>
      <ServicesList />
    </div>
  );
};
