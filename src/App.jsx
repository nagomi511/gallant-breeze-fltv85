import { ColorfulMessage } from "./ColorfulMessage";
import {useState} from "react";
import "./styles.css";

export const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue" fontSize="10px">ogenkidesuka</ColorfulMessage>
      <ColorfulMessage color="green" fontSize="18px"me>ogenkidesu</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
