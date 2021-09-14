import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const ToDoForm = (props) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //create an object with a random id number and set the input text field to the text property
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: inputText,
    });

    setInputText(""); //clear input field after submitting
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        <Grid item>
          <TextField
            onChange={handleChange}
            value={inputText}
            variant="outlined"
            id="outlined-basic"
            label="To Do"
            placeholder="e.g. Buy groceries"
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Add
            <AddIcon />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ToDoForm;
