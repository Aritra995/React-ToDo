import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./styles.css";

export default function App() {
  const [list, setList] = useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);
  
  const onEmptyButtonClickHandler = () => {
    setList([])
  }
  
  return (
    <>
      <Header />
      <ToDoList list={list} onEmptyButtonClick={onEmptyButtonClickHandler} />
    </>
  );
}
