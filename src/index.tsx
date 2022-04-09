import "./index.css";
import { HomeContainer } from './containers';

const React = require("react");
const ReactDOM = require("react-dom/client");

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <HomeContainer />
  </React.StrictMode>
);