import React, {Component} from 'react';

import "./index.scss"

class Design extends Component {
    render() {
        return (
            <div className="design">
                <h2>招商系统设计</h2>
                <h3>98招商为你快速建立招商体系</h3>
                <div className="con">
                    <div className="box">
                        <img src={require("../../../assets/img/recommend/design_01.png")} alt="聚焦企业"/>
                        <p>聚焦企业</p>
                        <p>绝对优势</p>
                    </div>
                    <div className="box">
                        <img src={require("../../../assets/img/recommend/design_02.png")} alt="整合营销"/>
                        <p>整合营销</p>
                        <p>精准数据</p>
                    </div>
                    <div className="box">
                        <img src={require("../../../assets/img/recommend/design_03.png")} alt="项目包装"/>
                        <p>项目包装</p>
                        <p>市场黑马</p>
                    </div>
                    <div className="box">
                        <img src={require("../../../assets/img/recommend/design_04.png")} alt="队伍搭建"/>
                        <p>队伍搭建</p>
                        <p>高效执行</p>
                    </div>
                </div>
                <div className="tip">
                    <p>企业招商属于重资产的业务部门，</p>
                    <p>98招商集中所有优势资源，</p>
                    <p>为客户提供全方位招商系统设计，</p>
                    <p>以获得巨额业绩回报，同时，降低了招商风险。</p>
                </div>
            </div>
        );
    }
}

export default Design;