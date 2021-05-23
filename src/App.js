import React from "react";
import "./App.css";

class App extends React.Component {
  n1 = "Ivan";

  getName() {
    return this.n1;
  }

  render() {
    return (
      <div className="App">
        <p>{this.getName()}</p>
      </div>
    );
  }
}
export default App;
