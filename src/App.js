import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { DatePicker } from "@progress/kendo-dateinputs-react-wrapper";

import "@progress/kendo-ui";

function App() {
  return (
    <div className="App">
      <h1> What date would you like? </h1>
      <DatePicker
        value="pick a date"
        min={new Date(2017, 1, 1)}
        max={new Date()}
        format={"yyyy/MM/dd"}
      />
    </div>
  );
}

export default App;
