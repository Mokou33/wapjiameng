import React, {Component} from 'react';

import "./index.scss"

class Coop extends Component {
    render() {
        return (
            <div className="coop">
                <h2>合作优势</h2>
                <h3>6大合作优势——为企业打造强引擎</h3>
                <div className="con">
                    <img src={require("../../../assets/img/cooperation/coop.png")} alt="合作优势"/>
                </div>
            </div>
        );
    }
}

export default Coop;