import React from "react";
import ReactDOM from "react-dom/client";
import { CommentDetail } from "./CommentDetail";

const App = () => {
    return <CommentDetail />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
