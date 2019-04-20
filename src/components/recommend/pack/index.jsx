import React, {Component} from 'react';

import {Tabs} from "antd";


import "./index.scss"


const TabPane = Tabs.TabPane;

class Pack extends Component {
    render() {
        return (
            <div className="pack">
                <h2>企业品牌价值包装</h2>
                <p>企业品牌价值就是企业的未来经济价值体现，</p>
                <p>产品品牌影响消费市场，</p>
                <p>企业品牌涉及到资本市场、政府机构对预期，</p>
                <p>间接影响到企业的商誉，</p>
                <p>好的企业形象将高价值的体现，</p>
                <p>能够撬动更多的潜在价值。</p>
                <div className="con">
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="bottom"
                        type="card"
                        tabBarStyle = {{
                            color: "fff",
                        }}

                    >
                        <TabPane tab="项目一" key="1">
                            <div className="box">
                                <img src={require("../../../assets/img/case/08.jpg")} alt="项目一"/>
                            </div>
                        </TabPane>
                        <TabPane tab="项目二" key="2">
                            <div className="box">
                                <img src={require("../../../assets/img/case/17.jpg")} alt="项目二"/>
                            </div>
                        </TabPane>
                        <TabPane tab="项目三" key="3">
                            <div className="box">
                                <img src={require("../../../assets/img/case/14.jpg")} alt="项目三"/>
                            </div>
                        </TabPane>
                        <TabPane tab="项目四" key="4">
                            <div className="box">
                                <img src={require("../../../assets/img/case/48.jpg")} alt="项目四"/>
                            </div>
                        </TabPane>
                        <TabPane tab="项目五" key="5">
                            <div className="box">
                                <img src={require("../../../assets/img/case/38.jpg")} alt="项目五"/>
                            </div>
                        </TabPane>
                    </Tabs>,
                </div>
            </div>
        );
    }
}

export default Pack;