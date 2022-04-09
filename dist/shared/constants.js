import { bgDark, bgLight, fontDark, fontLight } from './colors';
export const APP_NAME = 'Ahora';
export const BASE_ROUTE = '';
export const BASE_URL = 'http://localhost:3000';
export const BASE_API_URL = 'http://localhost:3001';
export const ABOUT_PAGE = 'about';
export const ABOUT_LABEL = 'About Us';
export const LOGIN_PAGE = 'get-started';
export const PAGES = {
    ABOUT_US: `${BASE_ROUTE}/${ABOUT_PAGE}`,
    ANOTHER_TAB: `${BASE_ROUTE}/another-tab`,
    LOGIN: `${BASE_ROUTE}/${LOGIN_PAGE}`
};
export var CONTENT;
(function (CONTENT) {
    CONTENT["CONSUMER"] = "consumer";
    CONTENT["MAIN"] = "main";
    CONTENT["PRODUCER"] = "producer";
})(CONTENT || (CONTENT = {}));
export const COLOR = {
    [CONTENT.CONSUMER]: {
        labelColor: fontDark,
        consumerBg: bgLight,
        producerBg: bgLight,
        tabColor: fontDark
    },
    [CONTENT.MAIN]: {
        labelColor: fontLight,
        consumerBg: bgLight,
        producerBg: bgDark,
        tabColor: fontDark
    },
    [CONTENT.PRODUCER]: {
        labelColor: fontLight,
        consumerBg: bgDark,
        producerBg: bgDark,
        tabColor: fontLight
    }
};
//# sourceMappingURL=constants.js.map