import React from "react";
import "./Comp3.css";
import * as _ from 'lodash';





class Comp3 extends React.Component {

    

    
    n4 = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
// → { 'a': 1, 'b': 2 }
    n44 = _.partition([1, 2, 8, 4], n => n % 2);
// → [[1, 3], [2, 4]]

    getName() {
        return this.n4;
    }

    getName() {
        return this.n44;
    }

    getName() {
        return this.n44[3];

    }

    render() {
        return (
            <div className="Comp3">
                <p>{JSON.stringify(this.n4, 2, "\t")}</p>
                <p>{JSON.stringify([1, this.n44, [3]])}</p>

            </div>
        );
    }
}
export default Comp3;