import React from "react";
import ReactDOM from "react-dom/client";
import "./style/App.css";
import { CommentDetail } from "./CommentDetail";
import { faker } from "@faker-js/faker";
import { ApprovalCard } from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning</h4>
                <div>Are you sure you want to do this?</div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    image={faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    comment="Nice blog post!"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    image={faker.image.avatar()}
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    comment="Good point..."
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    image={faker.image.avatar()}
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    comment="Did your parents have any children that lived?"
                />
            </ApprovalCard>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
