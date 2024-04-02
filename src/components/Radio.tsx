import { Dispatch, SetStateAction } from "react";

type Props = {
  name: string;
  value: string;
  isActive: boolean;
  setActive: Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
};

export default function Radio({
  name,
  value,
  isActive,
  setActive,
  children,
}: Props) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        className="peer hidden"
        checked={isActive}
        onChange={(e) => setActive(parseInt(e.target.value))}
      ></input>
      {children}
    </label>
  );
}
