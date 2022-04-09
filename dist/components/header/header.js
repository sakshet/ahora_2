import classnames from 'classnames';
import * as React from 'react';
import * as styles from './header.css';
import { APP_NAME } from '../../shared/constants';
export const Header = (props) => {
    return (React.createElement("div", { className: styles.header },
        React.createElement("div", { className: styles.label }, APP_NAME.toUpperCase()),
        React.createElement("div", { className: styles.right },
            React.createElement("div", { className: classnames(styles.tab, styles.professional) }, "Register as a professional"),
            React.createElement("div", { className: styles.tab }, "Need a service?"))));
};
//# sourceMappingURL=header.js.map