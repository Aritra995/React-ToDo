import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./styles.css";

const App = () => {
  const [list, setList] = useState(["Read SpringBoot", "Complete assignments", "Prepare breakfast", "Sleep for 2 hours", "Take a shower"]);
  const [completedList, setCompletedList] = useState([]);

  const onEmptyButtonClickHandler = () => {
    setList(list.filter(todo => !completedList.includes(todo)));
  }

  const onTaskClickHandler = (todo) => {
    (completedList.includes(todo)) ? 
        setCompletedList(completedList.filter(item => item !== todo)) : 
        setCompletedList([...completedList, todo]);
  }

  return (
    <>
      <Header />
      <ToDoList list={list} completedList={completedList}
        onEmptyButtonClick={onEmptyButtonClickHandler}
        onTaskClick={onTaskClickHandler} />
    </>
  );
}

export default App;
