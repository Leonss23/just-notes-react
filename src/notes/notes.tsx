export type Note = {
  id: number;
  title: string;
  content: string;
  owner: string;
  date: Date;
};

export const notes: Note[] = [
  {
    id: 0,
    title: "Mis papas no me quieren",
    content:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    owner: "me",
    date: new Date(2024, 3, 25),
  },
  {
    id: 1,
    title: "Asd",
    content:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    owner: "me",
    date: new Date(2024, 3, 25),
  },
];
