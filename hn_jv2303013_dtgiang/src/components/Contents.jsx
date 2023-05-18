import React from "react";

function Contents(props) {
  const { feedback, setFeedback } = props;
  const handleDelete = (i) => {
    let deleteFeedback = [...feedback];
    deleteFeedback.splice(i, 1);
    setFeedback([...deleteFeedback]);
  };

  return (
    <div className="content">
      {/* <div className="main-content">
        <span> Cho 3 diem </span>
        <div className="footer-content">
          <span>05/18/2022</span>
          <button onClick={() => handleDelete()}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div> */}

      {feedback.map((e, i) =>
        e.content !== "" ? (
          <div className="main-content" key={i}>
            <span> {e.content} </span>
            <div className="footer-content">
              <span>05/18/2023</span>
              <button onClick={() => handleDelete(i)}>
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

export default Contents;
