"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR = exports.CONTENT = exports.PAGES = exports.LOGIN_PAGE = exports.ABOUT_LABEL = exports.ABOUT_PAGE = exports.BASE_API_URL = exports.BASE_URL = exports.BASE_ROUTE = exports.APP_NAME = void 0;
const colors_1 = require("./colors");
exports.APP_NAME = 'Ahora';
exports.BASE_ROUTE = '';
exports.BASE_URL = 'http://localhost:3000';
exports.BASE_API_URL = 'http://localhost:3001';
exports.ABOUT_PAGE = 'about';
exports.ABOUT_LABEL = 'About Us';
exports.LOGIN_PAGE = 'get-started';
exports.PAGES = {
    ABOUT_US: `${exports.BASE_ROUTE}/${exports.ABOUT_PAGE}`,
    ANOTHER_TAB: `${exports.BASE_ROUTE}/another-tab`,
    LOGIN: `${exports.BASE_ROUTE}/${exports.LOGIN_PAGE}`
};
var CONTENT;
(function (CONTENT) {
    CONTENT["CONSUMER"] = "consumer";
    CONTENT["MAIN"] = "main";
    CONTENT["PRODUCER"] = "producer";
})(CONTENT = exports.CONTENT || (exports.CONTENT = {}));
exports.COLOR = {
    [CONTENT.CONSUMER]: {
        labelColor: colors_1.fontDark,
        consumerBg: colors_1.bgLight,
        producerBg: colors_1.bgLight,
        tabColor: colors_1.fontDark
    },
    [CONTENT.MAIN]: {
        labelColor: colors_1.fontLight,
        consumerBg: colors_1.bgLight,
        producerBg: colors_1.bgDark,
        tabColor: colors_1.fontDark
    },
    [CONTENT.PRODUCER]: {
        labelColor: colors_1.fontLight,
        consumerBg: colors_1.bgDark,
        producerBg: colors_1.bgDark,
        tabColor: colors_1.fontLight
    }
};
//# sourceMappingURL=constants.js.map