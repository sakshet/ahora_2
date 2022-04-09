import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTENT } from '../../shared';
import { setColors } from '../../utils';
import RefDataContext from '../../utils/context-utils';
import * as styles from './tab.css';
export function Tab(props) {
    const navigate = useNavigate();
    const onTabChange = (() => {
        navigate(props.page);
        setColors(CONTENT.CONSUMER);
    });
    return (React.createElement(RefDataContext.Consumer, null, (context) => (React.createElement("div", { className: styles.tab, onClick: onTabChange },
        React.createElement("div", { className: styles.label }, props.label)))));
}
//# sourceMappingURL=tab.js.map