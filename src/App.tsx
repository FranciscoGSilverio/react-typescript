import React from "react";
import "./App.css";

import Form from "./components/Form";
import List from "./components/List";
import StopWatch from "./components/StopWatch";

function App() {
  return (
    <div>
      <Form />
      <StopWatch />
      <List />
    </div>
  );
}

export default App;
