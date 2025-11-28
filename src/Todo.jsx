import "./styles.css";

export const Todo = () => {
  return (
  <>
  <div>
    <input placeholder="Todoを入力" />
    <button>追加</button>
  </div>
  <div>
    <p>未完了のTODO</p>
    <ul>
      <li>
        <p>TODOdesu</p>
        <button>done</button>
        <button>delete</button>
      </li>
      <li>
        <p>TODOdesu</p>
        <button>done</button>
        <button>delete</button>
      </li>
    </ul>
  </div>

  <div>
    <p>完了のTODO</p>
    <ul>
      <li>
        <p>TODOdesu</p>
        <button>return</button>
      </li>
      <li>
        <p>TODOdesu</p>
        <button>return</button>
      </li>
    </ul>
  </div>
  </>
  );
};
