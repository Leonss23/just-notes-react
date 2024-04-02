import { Dispatch, SetStateAction } from "react";
import NoteCard from "./NoteCard";
import { notes } from "./notes";
import Radio from "../components/Radio";

type Props = {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};

export default function NoteList({ active, setActive }: Props) {
  return (
    <div className="flex min-h-screen w-full max-w-96 flex-col items-center gap-4 border-r-4 border-r-neutral-300 p-4 dark:border-r-neutral-700">
      <button className="max-w-48 rounded-md bg-sky-400 p-4 px-12 text-xl shadow-md hover:bg-sky-300 active:bg-sky-500 dark:bg-sky-900 dark:hover:bg-sky-950 dark:active:bg-sky-800">
        New Note
      </button>
      {notes.map((n) => {
        const isActive = active === n.id;
        return (
          <Radio
            key={`notelist_${n.id}`}
            isActive={isActive}
            name="activeNote"
            setActive={setActive}
            value={`${n.id}`}
          >
            <NoteCard note={n}></NoteCard>
          </Radio>
        );
      })}
    </div>
  );
}
