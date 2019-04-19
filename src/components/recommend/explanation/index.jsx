import React, {Component} from 'react';


import "./index.scss"

class Explanation extends Component {
    render() {
        return (
            <div className="explanation">
                <h2>到底什么是好的商业模式？</h2>
                <div className="tip">
                    <span>洞察商业本质——为企业解决问题</span>
                </div>
                <div className="tip">
                    <span>98为客户重新打磨商业模型，让商业模式成为企业无形竞争力</span>
                </div>
                <div className="conWrap">
                    <img src={require("../../../assets/img/recommend/explanation_01.png")} alt="pic"/>
                </div>
            </div>
        );
    }
}

export default Explanation;