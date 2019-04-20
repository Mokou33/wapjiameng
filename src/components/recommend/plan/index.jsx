import React, {Component} from 'react';

import "./index.scss"

class Plan extends Component {
    render() {
        return (
            <div className="plan">
                <h2>产品规划</h2>
                <p>工业思维到产品思维的跨界整合,打造爆款产品塑造超级口碑,</p>
                <p>重塑消费品牌，让产品自己会说话，</p>
                <p>98招商产品中心，以互联网方式，玩转产品规划。</p>
                <div className="con">
                    <div className="box">
                        <div className="boxL">
                            <p>制定</p>
                            <p>产品方向</p>
                        </div>
                        <div className="pic">
                            <img src={require("../../../assets/img/recommend/plan_01.png")} alt="制定产品方向"/>
                        </div>
                    </div>
                    <div className="box">
                        <div className="boxL">
                            <p>同类产品</p>
                            <p>分析</p>
                        </div>
                        <div className="pic">
                            <img src={require("../../../assets/img/recommend/plan_02.png")} alt="同类产品分析"/>
                        </div>
                    </div>
                    <div className="box">
                        <div className="boxL">
                            <p>产品优势</p>
                            <p>挖掘</p>
                        </div>
                        <div className="pic">
                            <img src={require("../../../assets/img/recommend/plan_03.png")} alt="产品优势挖掘"/>
                        </div>
                    </div>
                    <div className="box">
                        <div className="boxL">
                            <p>产品功能</p>
                            <p>设计</p>
                        </div>
                        <div className="pic">
                            <img src={require("../../../assets/img/recommend/plan_04.png")} alt="产品功能设计"/>
                        </div>
                    </div>
                    <div className="box">
                        <div className="boxL">
                            <p>产品使用</p>
                            <p>场景设计</p>
                        </div>
                        <div className="pic">
                            <img src={require("../../../assets/img/recommend/plan_05.png")} alt="产品使用场景设计"/>
                        </div>
                    </div>
                    <div className="box">
                        <div className="boxL">
                            <p>产品</p>
                            <p>定价</p>
                        </div>
                        <div className="pic">
                            <img src={require("../../../assets/img/recommend/plan_06.png")} alt="产品定价"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Plan;