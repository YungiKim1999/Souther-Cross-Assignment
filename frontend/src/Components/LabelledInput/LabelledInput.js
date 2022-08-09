import React from "react";

export function LabelledInput({
  title = "",
  inputType = "text",
  inputValue,
  onChangeMethod,
}) {
  return (
      <div className="flex flex-col">
        <label className="text-white text-md font-semibold">{title}</label>
        <input
          className="rounded-md p-2 mt-1 focus:outline-2 focus:outline-offset-3 focus:outline-blue-200"
          type={`${inputType}`}
          value={inputValue}
          onChange={
            onChangeMethod ? (e) => onChangeMethod(e.target.value) : null
          }
        ></input>
      </div>
  );
}
