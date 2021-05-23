import React from "react";
import "./Comp4.css";

class Comp4 extends React.Component {
    n5 = "Component 4";

    getName() {
        return this.n5;
    }

    render() {
        return (
            <div className="Comp4">
                <p>{this.getName()}</p>
            </div>
        );
    }
}
export default Comp4;