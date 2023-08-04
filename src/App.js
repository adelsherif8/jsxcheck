import React from "react";
import NewComponent from "./NewComponent";

const firstName = "Adel";
function App() {
  return (
    <div>
      <NewComponent firstName={firstName} style />
    </div>
  );
}

export default App;
