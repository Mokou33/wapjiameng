import React, {Component} from 'react';

import "./index.scss"

class SerCon extends Component {
    render() {
        return (
            <div className="serCon">
                <div className="conTop">
                    <div className="serPic">
                        <img src={require("../../../assets/img/server/server_01.png")} alt="商业模式建立"/>
                        <h4>商业模式建立</h4>
                    </div>
                    <div className="serPic">
                        <img src={require("../../../assets/img/server/server_02.png")} alt="招商系统设计"/>
                        <h4>招商系统设计</h4>
                    </div>
                    <div className="serPic">
                        <img src={require("../../../assets/img/server/server_03.png")} alt="产品规划"/>
                        <h4>产品规划</h4>
                    </div>
                </div>
                <div className="conBot">
                    <div className="serPic">
                        <img src={require("../../../assets/img/server/server_04.png")} alt="战略定位"/>
                        <h4>战略定位</h4>
                    </div>
                    <div className="serPic">
                        <img src={require("../../../assets/img/server/server_05.png")} alt="品牌营销整合策划"/>
                        <h4>品牌营销整合策划</h4>
                    </div>
                    <div className="serPic">
                        <img src={require("../../../assets/img/server/server_06.png")} alt="企业形象包装"/>
                        <h4>企业形象包装</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default SerCon;