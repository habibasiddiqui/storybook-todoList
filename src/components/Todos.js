import React, { useState } from "react";
import ViewLi from "./ViewLi";
function Todos({ todolist }) {

  return (
    // <ul>
    //   {todolist.map((item) => (
    //     <li key={item.id}>{item.title}</li>  
    //   ))}
    // </ul>





    // now with li in a different component 
    <ul>
      <ViewLi todolist={todolist} />
    </ul>
  );
}

export default Todos;