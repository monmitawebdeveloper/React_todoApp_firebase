/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Style from "./Todos.module.css";
import { List, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
function Todos({ todos }) {
  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <div>
            <List>
              <ListItem className={Style.todo}>
                <input type="checkbox" name="" id="checkbox" />
                <ListItemText
                  className={Style.todoli}
                  key={todo.id}
                  primary={todo.title}
                  secondary="Dummy document 📖"
                />

                <DeleteForeverIcon
                  onClick={() => deleteTodo(todo.id)}
                  className={Style.button}
                />
              </ListItem>
            </List>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
