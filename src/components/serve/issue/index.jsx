import React, {Component} from 'react';

import "./index.scss"


class Issue extends Component {
    render() {
        return (
            <div className="issue">
                <div className="tit">
                    <h2>FACING PROBLEMS IN DIFFERENT STAGES</h2>
                    <h2>解决企业不同阶段的问题</h2>
                </div>
                <div className="cooDtails">
                    <h3 className="dtaTit">98助力企业突破发展瓶颈</h3>
                    <div className="cooCon">
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_01.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_02.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_03.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_04.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_05.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/issue_06.png")} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Issue;