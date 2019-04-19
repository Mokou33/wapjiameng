import React, {Component} from 'react';

import "./index.scss"


class Pub extends Component {
    render() {
        return (
            <div className="pub">
                <div className="adv">
                    <img src={require("../../../assets/img/server/adv_01.png")} alt="adv"/>
                </div>
                <div className="art1">
                    <p>新经济的剧烈变革时代，传统的招商还有用吗？</p>
                    <p><span>传统企业加快淘汰速度，99%不注重渠道的企业将会被淘汰</span></p>
                    <p>98-企业发展引擎，让业绩飞起来</p>
                </div>
                <div className="adv">
                    <img src={require("../../../assets/img/server/adv_02.png")} alt="adv"/>
                </div>
                <div className="art2">
                    <p>经济变革时期的新机会</p>
                    <p><span>98助力你的企业成为独角兽</span></p>
                </div>
            </div>
        );
    }
}

export default Pub;