import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Header />
        <ToDoList />
      </Container>
    </>
  );
}

export default App;
