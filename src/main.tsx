import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { RootStoreProvider } from "./mobxStore/rootStore";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <RootStoreProvider>
            <App />
        </RootStoreProvider>
        {/* </Provider> */}
    </React.StrictMode>
);
