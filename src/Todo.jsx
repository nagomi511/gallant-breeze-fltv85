import { useState } from "react";
import "./styles.css";
import { createIncrementalCompilerHost } from "typescript";

export const Todo = () => {
  const [incompleteTodos, setImcommpleteTodos] = useState();
  return (
  <>
  <div className="input-area">
    <input placeholder="Todoを入力" />
    <button>追加</button>
  </div>
  <div className="complete-area">
    <p className="title">未完了のTODO</p>
    <ul>
      <li>
        <div className="list-row">
        <p>TODOdesu</p>
        <button>done</button>
        <button>delete</button>
        </div>
      </li>
      <li>
        <div className="list-row">
        <p>TODOdesu</p>
        <button>done</button>
        <button>delete</button>
        </div>
      </li>
    </ul>
  </div>

  <div className="incomplete-area">
    <p className="title">完了のTODO</p>
    <ul>
      <li>
      <div className="list-row">
        <p>TODOdesita</p>
        <button>return</button>
      </div>
      </li>
      <li>
      <div className="list-row">
        <p>TODOdesita</p>
        <button>return</button>
      </div>
      </li>
    </ul>
  </div>
  </>
  );
};
