import React from "react";
import ReactDOM from "react-dom/client";
import { CommentDetail } from "./CommentDetail";
import { faker } from "@faker-js/faker";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                image={faker.image.avatar()}
                author="Sam"
                timeAgo="Today at 4:45PM"
                comment="Nice blog post!"
            />
            <CommentDetail
                image={faker.image.avatar()}
                author="Alex"
                timeAgo="Today at 2:00AM"
                comment="Good point..."
            />
            <CommentDetail
                image={faker.image.avatar()}
                author="Jane"
                timeAgo="Yesterday at 5:00PM"
                comment="Did your parents have any children that lived?"
            />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
