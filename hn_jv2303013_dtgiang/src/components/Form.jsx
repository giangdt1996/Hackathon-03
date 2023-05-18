import React from "react";

function Form(props) {
  const { input, setInput, feedback, setFeedback } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    let newFeedback = {
      content: input,
    };
    let addFeedback = [...feedback];
    setFeedback([...addFeedback, newFeedback]);
    setInput("");
  };
  const countText = 200 - input.length;
  console.log(input);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="form main-content" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type Review here..."
        value={input}
        onChange={handleChange}
      />
      <div className="footer-content">
        <span>{countText} left</span>
        <button>
          PUBLISH<i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </form>
  );
}

export default Form;
