import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./style/App.css";
const currentDate = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
};
const finalTime = new Intl.DateTimeFormat("en-us", options).format(currentDate);
const authorsText = ["Hey big man!", "Hey tall man!", "Hey yo!"];
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
        </div>
        Are you sure you want to do this thing?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          image={faker.image.image()}
          author="almog"
          date="Today 8:00PM"
          text={authorsText[0]}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.image()}
          author="Dekel"
          date="Today 6:00PM"
          text={authorsText[1]}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.image()}
          author="Alex"
          date={finalTime}
          text={authorsText[2]}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
