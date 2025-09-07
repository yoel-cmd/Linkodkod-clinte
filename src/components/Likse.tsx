import { useState } from "react";
import "../style/Likse.css";

export default function Likse(props: { emoji: number }) {
  const [count, setCount] = useState(props.emoji);
  const [pressure, setPrass] = useState(false);
  return (
    <>
    {/* I made a promise that each click only raises the mark once - another click lowers it. */}
      <button
        className="btnLike"
        onClick={() => {
          if (!pressure) {
            setCount((prev) => prev + 1);
            setPrass((prev) => !prev);
          } else {
            setCount((prev) => prev - 1);
            setPrass((prev) => !prev);
          }
        }}
      >
        👌 {count}{" "}
      </button>
      <p></p>
    </>
  );
}
