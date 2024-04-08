import { useState } from "react";
import NoteEditor from "./NoteEditor";
import NoteList from "./NoteList";
import { Note } from "./notes";

export default function NotesPage() {
  const [active, setActive] = useState<number>(0);

  const lsNotes: Note[] = JSON.parse(localStorage.getItem("notes") || "");
  const [notes, setNotes] = useState<Note[]>(lsNotes);

  return (
    <div className="flex">
      <NoteList
        active={active}
        setActive={setActive}
        notes={notes}
        setNotes={setNotes}
      ></NoteList>
      <NoteEditor
        notes={notes}
        setNotes={setNotes}
        active={active}
      ></NoteEditor>
    </div>
  );
}
