import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId="3f1e084d-9b60-45cd-804f-947aec0a91c0" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
