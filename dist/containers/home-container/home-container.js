import * as React from 'react';
import { Header, HomeContent, Footer } from '../../components';
import * as styles from './home-container.css';
export class HomeContainer extends React.Component {
    render() {
        return (React.createElement("div", { className: styles.home },
            React.createElement(Header, null),
            React.createElement(HomeContent, null),
            React.createElement(Footer, null)));
    }
}
//# sourceMappingURL=home-container.js.map