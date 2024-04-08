import { useEffect, useState } from "react";
import { Note } from "./notes";

type Props = {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  active: number;
};

export default function NoteEditor({ notes, setNotes, active }: Props) {
  const getActiveNote = () => notes.find((n) => n.id === active) as Note;

  const [note, setNote] = useState<Note>(getActiveNote());

  useEffect(() => {
    //
    setNote(getActiveNote());
  }, [active, notes]);

  useEffect(() => {
    console.log({ title: note.title });

    // update notes when note is updated
    setNotes((n) => {
      const filteredNotes = n.filter((n) => n.id !== active);
      return [...filteredNotes, note];
    });
  }, [note]);

  // useEffect(() => {
  //   const filteredNotes = notes.filter((n) => n.id !== active);
  //   const updatedNote: Note = { ...note, content, title };
  //
  //   setNotes([...filteredNotes, updatedNote]);
  // }, []);

  // const onNoteChange = (newNote: Note) => {
  //   const notes = JSON.parse(localStorage.getItem("notes") || "") as Note[];
  //   const filteredNotes = notes.filter((el) => el.id !== newNote.id) as Note[];
  //   console.log([...filteredNotes, newNote]);
  //   setNote(newNote);
  //   localStorage.setItem("notes", JSON.stringify([...filteredNotes, newNote]));
  //   console.log("Note successfully saved!");
  // };

  return (
    <div className="flex justify-center">
      <div
        className="container flex flex-col px-20 py-4"
        contentEditable
        suppressContentEditableWarning
      >
        <h1
          className="text-4xl"
          // onBlur={(e) => setTitle(e.target.innerText)}
        >
          {note.title}
        </h1>
        <p
        // onBlur={(e) => setContent(e.target.innerText)}
        >
          {note.content}
        </p>
      </div>
    </div>
  );
}
