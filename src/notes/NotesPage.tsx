import { useState } from "react";
import NoteEditor from "./NoteEditor";
import NoteList from "./NoteList";
import { notes } from "./notes";

export default function NotesPage() {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="flex">
      <NoteList active={active} setActive={setActive}></NoteList>
      <NoteEditor note={notes[active]}></NoteEditor>
    </div>
  );
}
