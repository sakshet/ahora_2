import * as React from 'react';
import * as styles from './provider-renderer.css';
export const ProviderRenderer = (props) => {
    return (React.createElement("div", { className: styles.provider },
        React.createElement("div", { className: styles.message },
            "Earn More.",
            React.createElement("br", null),
            "Earn Respect.",
            React.createElement("br", null),
            "Safety Ensured."),
        React.createElement("div", { className: styles.message }, "Join other partners across London, Liverpool and across the United Kingdom."),
        React.createElement("div", { className: styles.message }, "Start earning straight away. Share your details and we'll reach out with next steps.")));
};
//# sourceMappingURL=provider-renderer.js.map