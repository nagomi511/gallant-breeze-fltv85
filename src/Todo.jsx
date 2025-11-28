import { useState } from "react";
import "./styles.css";
import { createIncrementalCompilerHost } from "typescript";

export const Todo = () => {
  const[todoText, setTodoText] = useState("");
  const [incompleteTodos, setImcommpleteTodos] = useState([
    "TODO1desu", 
    "TODO2desu"
  ]);
  const [completeTodos, setcommpleteTodos] = useState(
    ["TODO1desita",
     "TODO2desita"
    ]);

   const onChangeTodoText = (event) => event.target.value;
  
   return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" value={todoText} onChange={onchange}/>
        <button>追加</button>
      </div>
      <div className="complete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p claaName="todo-item">{todo}</p>
                <button>done</button>
                <button>delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="incomplete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>return</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
