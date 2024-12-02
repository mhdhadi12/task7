import React from "react";

interface Props {
  text: string;
}
export default function Button({ text }: Props) {
  return (
    <button className="mt-8 bg-blue-800 text-white text-lg px-8 py-3">
      {text}
    </button>
  );
}
