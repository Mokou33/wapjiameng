import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./index.scss"

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <ul>
                    <li><Link  to='/'><span><i className="iconfont icon-shouye-"></i></span>首页</Link></li>
                    <li><Link  to='/serve'><span><i className="iconfont icon-fuwuneirong"></i></span>服务内容</Link></li>
                    <li><Link  to='/cooperation'><span><i className="iconfont icon-hezuo"></i></span>合作优势</Link></li>
                    <li><Link  to='/classic/one'><span><i className="iconfont icon-anli-A"></i></span>经典案例</Link></li>
                    <li><Link  to='/recommend'><span><i className="iconfont icon-jieshao"></i></span>98介绍</Link></li>
                    <li><Link  to='/rare'><span><i className="iconfont icon-ziyuan"></i></span>快速资源</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;