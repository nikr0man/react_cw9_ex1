import React from "react";
import "./Comp2.css";

class Comp2 extends React.Component {
  n3 = "Component 2";

  getName() {
    return this.n3;
  }

  render() {
    return (
      <div className="Comp2">
        <p>{this.getName()}</p>
      </div>
    );
  }
}
export default Comp2;
