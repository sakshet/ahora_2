import * as React from 'react';
import { ConsumerRenderer, ProviderRenderer } from '../../components';
import RefDataContext from '../../utils/context-utils';
import * as styles from './content-container.css';
export class ContentContainer extends React.Component {
    render() {
        return (React.createElement(RefDataContext.Consumer, null, (context) => (React.createElement("div", { className: styles.content },
            React.createElement(ProviderRenderer, null),
            React.createElement(ConsumerRenderer, null)))));
    }
}
//# sourceMappingURL=content-container.js.map