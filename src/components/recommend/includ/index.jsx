import React, {Component} from 'react';

import "./index.scss"

class Includ extends Component {
    render() {
        return (
            <div className="inculd">
                <h2>98招商系统包括：</h2>
                <div className="con">
                    <img src={require("../../../assets/img/recommend/includ.png")} alt="98加盟"/>
                </div>
            </div>
        );
    }
}

export default Includ;