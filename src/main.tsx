import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ContextProvider, LibraryProvider } from "./provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LibraryProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </LibraryProvider>
  </React.StrictMode>
);
