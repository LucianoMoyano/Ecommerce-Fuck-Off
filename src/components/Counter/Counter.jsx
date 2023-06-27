import React, { useState } from "react";

//Botones de react-icons
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div>
        <h3>{counter}</h3>
        <hr />
        <button style={{ margin: 5 }} onClick={handleAdd}>
          <IoIosAddCircleOutline />
        </button>
        <button onClick={handleRemove}>
          <IoMdRemoveCircleOutline />
        </button>
      </div>
    </>
  );
};
