import React, { useState } from "react";

export const Five = () => {
  const [data, setData] = useState("");
  const [addData, setAddData] = useState([]);

  const addTodo = () => {
    if (data.trim() !== "") {
      setAddData([...addData, data]);
      setData(""); // Clear the input field
    }
  };
  const removeTodo = (indexToRemove) => {
    const updateTodo = addData.filter((_, index) =>index != indexToRemove);
    setAddData(updateTodo);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {addData.map((item, index) => (
          <li key={index}>  {item}
            <button onClick={()=>removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
