import "./styles.css";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px",
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <h2 style={contentStyle}>お元気ですか</h2>
      {console.log("hoge!")}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
