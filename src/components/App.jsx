import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // const [titles, setTitles] = useState([]);
  // const [contents, setContents] = useState([]);
  const [notes, setNotes] = useState([{ title: "", content: "" }]);
  function handleClick(titleValue, contentValue, event) {
    // setTitles((prevValues) => [...prevValues, titleValue]);
    // setContents((prevValues) => [...prevValues, noteValue]);
    setNotes((prevValues) => [
      ...prevValues,
      { title: titleValue, content: contentValue },
    ]);
    event.preventDefault();
  }

  function deleteNotes(id) {
    setNotes((prevValues) => {
      return prevValues.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea click={handleClick} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            del={deleteNotes}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
