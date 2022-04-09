import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ABOUT_LABEL, APP_NAME, BASE_URL, CONTENT, PAGES } from '../../shared';
import RefDataContext from '../../utils/context-utils';
import { setColors } from '../../utils';
import { Tab } from '../tab';
import * as styles from './page-header.css';
export function getLabel(context) {
    const { isLoggedIn, memberInfo } = context.referenceData;
    return isLoggedIn ? `Welcome, ${memberInfo.firstName}` : 'Log In / Sign Up';
}
export function PageHeader(props) {
    const navigate = useNavigate();
    const onClick = (() => {
        navigate(BASE_URL);
        setColors(CONTENT.MAIN);
    });
    return (React.createElement("div", { className: styles.header },
        React.createElement(RefDataContext.Consumer, null, (context) => (React.createElement("div", { className: styles.header },
            React.createElement("div", { className: styles.label, onClick: onClick },
                "\u300B",
                APP_NAME,
                "\u300A"),
            React.createElement("div", { className: styles.tabs },
                React.createElement(Tab, { label: ABOUT_LABEL, page: PAGES.ABOUT_US }),
                React.createElement(Tab, { label: getLabel(context), page: PAGES.LOGIN })))))));
}
//# sourceMappingURL=page-header.js.map