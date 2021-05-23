import React from "react";
import "./Comp1.css";

class Comp1 extends React.Component {
  n2 = "Component 1";

  getName() {
    return this.n2;
  }

  render() {
    return (
      <div className="Comp1">
        <p>{this.getName()}</p>
      </div>
    );
  }
}
export default Comp1;
