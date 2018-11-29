import React from "react";
// function list(props){
//   return <ul>
//     <li>Hello</li>
//   </ul>
// }
function list({ task }) {
  return (
    <ul>
      {tasks.map(task => {
        return <li key={task.text}>task.text</li>;
        <button onClick={()=>removeTask()}>
         delete 
        </button>
      })}
      <li>Hello</li>
    </ul>
  );
}
