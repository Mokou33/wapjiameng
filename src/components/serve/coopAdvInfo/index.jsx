import React, {Component} from 'react';

import "./index.scss"

class CoopAdvInfo extends Component {
    render() {
        return (
            <div className="coopAdvInfo">
                <img src={require("../../../assets/img/server/cooAdvInfo.png")} alt="info"/>
            </div>
        );
    }
}

export default CoopAdvInfo;