import { dark, light } from './colors';

export const APP_NAME: string = 'Ahora';

export const BASE_ROUTE: string = '';
export const BASE_URL: string = 'http://localhost:3000';
export const BASE_API_URL: string = 'http://localhost:3001';

export const ABOUT_PAGE: string = 'about';
export const ABOUT_LABEL: string = 'About Us'
export const LOGIN_PAGE: string = 'get-started';

export const PAGES = {
  ABOUT_US: `${BASE_ROUTE}/${ABOUT_PAGE}`,
  ANOTHER_TAB: `${BASE_ROUTE}/another-tab`,
  LOGIN: `${BASE_ROUTE}/${LOGIN_PAGE}`
}

export enum CONTENT {
  CONSUMER = 'consumer',
  MAIN = 'main',
  PRODUCER = 'producer'
}

export const COLOR = {
  [CONTENT.CONSUMER]: {
    labelColor: dark,
    consumerBg: light,
    producerBg: light,
    tabColor: dark
  },
  [CONTENT.MAIN]: {
    labelColor: light,
    consumerBg: light,
    producerBg: dark,
    tabColor: dark
  },
  [CONTENT.PRODUCER]: {
    labelColor: light,
    consumerBg: dark,
    producerBg: dark,
    tabColor: light
  }
}