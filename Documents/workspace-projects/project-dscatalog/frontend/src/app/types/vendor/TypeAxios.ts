import { Method } from 'axios';

export type TypeAxiosPage = {
  method?: Method;
  url: string;
  data?: object;
  params?: object;
};
