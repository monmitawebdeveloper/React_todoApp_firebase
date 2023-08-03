/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Todos from "./component/Todos";
import Style from "./App.module.css";
import Form from "./component/Form";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

// import { Button } from "@mui/material";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // firebase configer
  useEffect(() => {
    // collection ref
    const todoCollectionRef = collection(db, "todos");
    // queries
    const q = query(
      todoCollectionRef,

      orderBy("createAt")
    );

    //Real time database
    onSnapshot(q, (snapshot) => {
      const todoFilter = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(todoFilter);
    });
  }, []);

  // Input text Handel
  const submitTodoHandler = async (e) => {
    // This will fire off when we click the button
    e.preventDefault(); //Will stop the Refresh
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      title: input,
      createAt: serverTimestamp(),
    });

    setInput(""); //Clear up the input after clicking add todo button
    console.log(input);
  };

  return (
    <div className={Style.container}>
      <h1>Todo Apps</h1>
      <h2>Hello, MonmitaDev🚀</h2>

      <Form input={input} setInput={setInput} formHandler={submitTodoHandler} />

      <Todos todos={todos} />
    </div>
  );
}

export default App;
