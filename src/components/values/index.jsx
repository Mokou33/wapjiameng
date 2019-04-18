import React, {Component} from 'react';


import "./index.scss"

class Values extends Component {
    render() {
        return (
            <div className="values">
                <h2>招商价值观</h2>
                <div className="con">
                    <img src={require("../../assets/img/values/value.png")} alt="价值"/>
                </div>
            </div>
        );
    }
}

export default Values;