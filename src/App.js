import React, {useContext} from "react";
import "./App.css";
import { PeopleContext, PeopleProvider } from "./PeopleContext";
import Child from './Child'


function App() {
  return (
    <PeopleProvider>
      <div className="App">
        <Child />
      </div>
      </PeopleProvider>
  );
}

export default App;
