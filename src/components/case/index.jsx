import React, {Component} from 'react';

import "./index.scss"


class Case extends Component {
    render() {
        return (
            <div className="case">
                <div className="tit">
                    <h2>A CLASSIC CASE</h2>
                    <h2>经典案例</h2>
                </div>
                <div className="con">
                    <ul className="conUl">
                        <li><img src={require("../../assets/img/case/06.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/14.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/21.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/35.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/41.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/45.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/48.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/15.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/46.jpg")} alt="case"/></li>
                        <li><img src={require("../../assets/img/case/34.jpg")} alt="case"/></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Case;