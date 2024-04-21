import { Note } from "./notes";

type Props = {
  note: Note;
};

export default function NoteCard({ note }: Props) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl p-4 shadow-md hover:hover:hover:bg-neutral-200 peer-checked:bg-white dark:bg-neutral-800 dark:hover:hover:hover:bg-neutral-700 dark:peer-checked:bg-neutral-900`}
    >
      <div className="flex content-evenly items-start justify-between gap-6">
        <p className="text-2xl">{note.title}</p>
        <p className="text-sm text-neutral-500">
          {new Date(note.date).toLocaleDateString()}
        </p>
      </div>
      <p>{note.content}</p>
    </div>
  );
}
