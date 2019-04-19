import React, {Component} from 'react';

import {Link} from "react-router-dom";



import "./index.scss"

class Header extends Component {
    state = {
        flag: true
    }

    componentDidMount() {

        this.nav.onclick = ()=>{

            if(this.state.flag){

                this.ul.className='nav on'
                this.setState({
                    flag: false
                })
            }else {
                this.ul.className='nav'
                this.setState({
                    flag: true
                })
            }
        }

    }


    render() {
        return (
            <div className="header">
                <div className="left">
                    <Link to="/">
                        <img src={require("../../assets/img/header/logo.png")} alt="logo" className="logo"/>
                    </Link>
                </div>
                <div ref={nav=>this.nav=nav} className="right">
                    <img src={require("../../assets/img/header/top_ban.png")} alt="导航" className="navimg"/>
                    <div ref={ul=>this.ul=ul} className="nav">
                        <ul >
                            <li><Link to="/">首页</Link></li>
                            <li><Link to="/serve">服务内容</Link></li>
                            <li><Link to="/cooperation">合作优势</Link></li>
                            <li><Link to="/classic">经典案例</Link></li>
                            <li><Link to="/recommend">98介绍</Link></li>
                            <li><Link to="/rare">快速资源</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;