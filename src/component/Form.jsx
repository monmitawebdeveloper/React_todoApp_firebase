/* eslint-disable react/prop-types */
import { FormControl, InputLabel, Input } from "@mui/material";
import Style from "./Form.module.css";
function Form({ input, setInput, formHandler }) {
  return (
    <div>
      <FormControl>
        <InputLabel> Write a todo</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          type="text"
        />
      </FormControl>
      <button type="submit" onClick={formHandler} className={Style.button}>
        {" "}
        Add todo
      </button>
      {/* <Button
        // disabled={!input}
        type="submit"
        onClick={formHandler}
        variant="contained"
      >
        Add todo
      </Button> */}
    </div>
  );
}

export default Form;
