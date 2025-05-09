import style from "./style.module.css";

type Props = {
  value?: string;
  size?: "default" | "small";
  color?: "default" | "correct" | "wrong";
};

export function Letter({
  value = "",
  size = "default",
  color = "default",
}: Props) {
  return (
    <div
      className={`
        ${style.letter} 
        ${size === "small" && style.letterSmall} 
        ${color === "correct" && style.letterCorrect} 
        ${color === "wrong" && style.letterWrong}`}
    >
      <span>{value}</span>
    </div>
  );
}
