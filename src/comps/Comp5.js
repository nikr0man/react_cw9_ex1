import React from "react";
import "./Comp5.css";

class Comp5 extends React.Component {
  n6 = "Component 5";

  getName() {
    return this.n6;
  }

  render() {
    return (
      <div className="Comp5">
        <p>{this.getName()}</p>
      </div>
    );
  }
}
export default Comp5;
