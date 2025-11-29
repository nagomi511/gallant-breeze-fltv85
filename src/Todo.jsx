import { useState } from "react";
import "./styles.css";
import { createIncrementalCompilerHost } from "typescript";

export const Todo = () => {
  const[todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODO1desu", 
    "TODO2desu"
  ]);
  const [completeTodos, setcompleteTodos] = useState(
    ["TODO1desita",
     "TODO2desita"
    ]);

   const onChangeTodoText = (event) => setTodoText(event.target.value);
   
   const onClickAdd = () => {
   const newTodos = [...incompleteTodos, todoText];
     setIncompleteTodos(newTodos);
   };

   return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="complete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
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
