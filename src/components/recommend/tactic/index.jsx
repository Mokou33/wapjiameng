import React, {Component} from 'react';

import "./index.scss"

class Tactic extends Component {
    render() {
        return (
            <div className="tactic">
                <h2>战略规划</h2>
                <p className="nor">经济变革中，产业链中的机会，消费趋势有哪些变化？</p>
                <p className="nor">98加盟深刻洞察国内经济发展的趋势与周期，</p>
                <p className="spc">抓住企业发展的<span>黄金机会</span>，</p>
                <p className="spc">为企业做好战略定位</p>
                <div className="con">
                    <div className="box">
                        <p>企业发展</p>
                        <p>方向设计</p>
                    </div>
                    <div className="box">
                        <p>企业资源配置</p>
                        <p>策略设计</p>
                    </div>
                    <div className="spel">
                        <p>战略</p>
                        <p>规划</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tactic;