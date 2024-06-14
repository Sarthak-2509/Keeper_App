import React, { useState } from "react";

function CreateArea(props) {
  const [titleValue, setTitle] = useState("");
  const [noteValue, setNote] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleContentChange(event) {
    setNote(event.target.value);
  }
  return (
    <div>
      <form>
        <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          value={titleValue}
        />
        <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteValue}
        />
        <button
          onClick={(event) => {
            props.click(titleValue, noteValue, event);
            setTitle("");
            setNote("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
