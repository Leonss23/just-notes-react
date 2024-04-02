import { useState } from "react";
import { Note } from "./notes";

type Props = {
  note: Note;
};

export default function NoteEditor(props: Props) {
  const [note, setNote] = useState(props.note);

  const onNoteChange = (newNote: Note) => { 
    const notes = JSON.parse(localStorage.getItem("notes") || "") as Note[]
    
    const filteredNotes = notes.filter(el => el.id !== newNote.id) as Note[]

    console.log([...filteredNotes, newNote])
    
    setNote(newNote)

    localStorage.setItem("notes", JSON.stringify([...filteredNotes, newNote]))

    console.log("Note successfully saved!")
  }

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col px-20 py-4">
        <h1
          contentEditable
          suppressContentEditableWarning
          className="text-4xl"
          onBlur={(e) => {
            const { target } = e;

            console.log("Event: ", e)
            const title = (target as HTMLHeadingElement).textContent || ""

            onNoteChange({ ...note, title: title })
          }}
        >
          {note.title}
        </h1>
        <p
          contentEditable
          suppressContentEditableWarning
        >{note.content}</p>
      </div>
    </div>
  );
}
