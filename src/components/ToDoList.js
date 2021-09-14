import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedItems = localStorage.getItem("todos");

    //if there is a list stored
    if (savedItems) {
      return JSON.parse(savedItems);
    } else {
      return [];
    }
  });

  //useEffect used to save local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    //Fix whitespace issue
    //add local storage
    //clear input after entering
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const deleteItem = (id) => {
    const newArr = todos.filter((todo) => todo.id !== id);
    setTodos(newArr);
  };
  return (
    <Container maxWidth="sm">
      <ToDoForm onSubmit={addTodo} />
      <List>
        {todos.map((todo, i) => (
          <ListItem
            key={`${todo.text}${i}`}
            style={{
              border: "1px solid #423e47",
              margin: "1.5rem 0",
            }}
          >
            <ListItemText style={{ color: "#3f51b5" }}>
              {todo.text}
            </ListItemText>
            <ListItemIcon>
              <IconButton color="secondary" onClick={() => deleteItem(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>

      <Grid container justifyContent="center">
        <Grid item>
          <Button
            onClick={() => setTodos([])}
            color="primary"
            variant="contained"
            disabled={!todos.length ? true : false}
          >
            Clear Items
          </Button>
        </Grid>
      </Grid>

      <Typography align="center" variant="subtitle1">
        {todos.length > 0 && `You have ${todos.length} items to complete!`}
      </Typography>
    </Container>
  );
};

export default ToDoList;
