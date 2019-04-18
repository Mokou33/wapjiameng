import React, {Component} from 'react';

import "./index.scss"

class Method extends Component {
    render() {
        return (
            <div className="method ">
                <h2>招商方法论</h2>
                <div className="con">
                    <div className="topt">
                        <p>招商作为一种最直接的营销手段，</p>
                        <p>因为能快速回笼资金、组建渠道和借用关系，</p>
                        <p>俏销改变了无数个企业的命运，创造了一个又一个销售奇迹</p>
                        <p>那么如何做好招商呢？</p>
                        <p>98加盟以品牌+渠道双驱动模式帮助企业解决招商难题：</p>
                    </div>

                    <div className="bott">
                        <img src={require("../../assets/img/method/methods.png")} alt="pic"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Method;