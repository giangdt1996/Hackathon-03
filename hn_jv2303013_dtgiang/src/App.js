import "./App.css";
import React, { useState } from "react";
import Contents from "./components/Contents";
import Search from "./components/Search";
import Form from "./components/Form";

function App() {
  const [feedbacks, setFeedbacks] = useState([
    {
      content: "",
    },
  ]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState(true);
  const handleChangeDL = () => {
    setTheme(!theme);
  };
  return (
    <div className={theme ? "App light" : "App dark"}>
      <div className="header">
        <h2>
          Review TA Béc Cọp!!! <i class="fa-solid fa-flag"></i>
        </h2>
        <button onClick={handleChangeDL}>
          <i class="fa-solid fa-circle-half-stroke"></i>
        </button>
      </div>
      <Search />
      <div className="content">
        <Contents feedback={feedbacks} setFeedback={setFeedbacks} />
        <Form
          input={input}
          setInput={setInput}
          feedback={feedbacks}
          setFeedback={setFeedbacks}
        />
      </div>
    </div>
  );
}

export default App;
