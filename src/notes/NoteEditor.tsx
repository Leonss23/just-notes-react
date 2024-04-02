import { useState } from "react";
import { Note } from "./notes";

type Props = {
  note: Note;
};

export default function NoteEditor(props: Props) {
  const [note, setNote] = useState(props.note);

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col px-20 py-4">
        <h1
          contentEditable
          className="text-4xl"
          onInput={(e) => {
            const title = e.target.textContent;

            // setNote();
          }}
        >
          {note.title}
        </h1>
        <p>{note.content}</p>
      </div>
    </div>
  );
}
