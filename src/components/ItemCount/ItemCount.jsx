import React, { useState } from "react";

export const ItemCount = () => {
  const [count, setCount] = useState(0);

  const contador = () => {
    setCount(count + 1);
  };

  return <div>ItemCount: {count}</div>;
};
