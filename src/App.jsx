import "./styles.css";

const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <h2>お元気ですか</h2>
      {console.log("hoge!")}
      <button onClick={() => alert("Hello")}>ボタン</button>
    </>
  );
};

export default App;
