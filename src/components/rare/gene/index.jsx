import React, {Component} from 'react';

import "./index.scss"

class Gene extends Component {
    render() {
        return (
            <div className="gene">
                <div className="gCon">
                    <div className="con">
                        <h2><span>推广</span>问题咨询</h2>
                        <p>1，推广渠道单一，无法找到最匹配的数量来源？</p>
                        <p>2，数据精准度不够，造成大量浪费？</p>
                        <p>3，不了解数据分析，找不到关键问题？</p>
                        <p>4，数据不稳定，质量参差不齐？</p>
                    </div>
                    <div className="pic">
                        <img src={require("../../../assets/img/rare/rare_03.png")} alt="推广问题咨询"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gene;