import React, {Component} from 'react';

import "./index.scss"

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="zs">
                    <div className="con">
                        <h2><span>招商</span>问题咨询</h2>
                        <p>1，招商启动资金少？</p>
                        <p>2，没有招商团队，无法落地执行？</p>
                        <p>3，招商流程不熟悉，见不到效果？</p>
                        <p>4，招商设计效果不好，无法体现公司实力？</p>
                        <p>......</p>
                    </div>
                    <div className="pic">
                        <img src={require("../../../assets/img/rare/rare_01.png")} alt="招商问题咨询"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;