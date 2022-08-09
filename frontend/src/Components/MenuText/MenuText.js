import React from "react";

export function MenuText({text}) {
  return (
    <div className="py-2 px-4 text-2xl font-medium text-white hover:bg-sky-800">
      {text}
    </div>
  );
}
