import React, {Component} from 'react';

import "./index.scss"

class Honour extends Component {
    render() {
        return (
            <div className="honour">
                <h2>公司荣誉</h2>
                <div className="con">
                    <img src={require("../../assets/img/honour/honour.png")} alt="荣誉"/>
                </div>
            </div>
        );
    }
}

export default Honour;