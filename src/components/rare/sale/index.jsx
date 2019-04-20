import React, {Component} from 'react';

import "./index.scss"

class Sale extends Component {
    render() {
        return (
            <div className="sale">
                <div className="con">
                    <h2><span>招商</span>问题咨询</h2>
                </div>
                <div className="box">
                    <div className="bCon">
                        <p className="num"><span>1</span></p>
                        <img src={require("../../../assets/img/rare/rare2_01.png")} alt="why"/>
                        <p>销售</p>
                        <p>队伍不好带？</p>
                    </div>
                    <div className="bCon">
                        <p className="num"><span>2</span></p>
                        <img src={require("../../../assets/img/rare/rare2_02.png")} alt="why"/>
                        <p>业绩不稳定，</p>
                        <p>找不到方法？</p>
                    </div>
                    <div className="bCon">
                        <p className="num"><span>3</span></p>
                        <img src={require("../../../assets/img/rare/rare2_03.png")} alt="why"/>
                        <p>销售目标达不到，</p>
                        <p>找不到优化方法？</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sale;