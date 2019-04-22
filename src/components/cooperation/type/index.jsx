import React, {Component} from 'react';

import "./index.scss"

class Type extends Component {
    render() {
        return (
            <div className="type">
                <div>
                    <img src={require("../../../assets/img/cooperation/type_01.png")} alt=""/>
                    <img src={require("../../../assets/img/cooperation/type_02.png")} alt=""/>
                    <img src={require("../../../assets/img/cooperation/type_03.png")} alt=""/>
                    <img src={require("../../../assets/img/cooperation/type_04.png")} alt=""/>
                </div>
                <div className="sub">
                    {/*<a href="#">提交需求</a>*/}
                    <span>提交需求</span>
                </div>

            </div>
        );
    }
}

export default Type;