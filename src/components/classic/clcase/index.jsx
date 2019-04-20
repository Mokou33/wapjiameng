import React, {Component} from 'react';

import {NavLink, Route} from "react-router-dom";

import "./index.scss"

import One from "../one";
import Two from "../two";
import Three from "../three";
import Four from "../four";
import Five from "../five";






class Clcase extends Component {
    render() {
        return (
            <div className="clcase" >
                <div className="sort">
                    <span>分类:</span>
                    <ul className="sortCon">
                        <li><NavLink activeClassName="selected" to="/classic/one">VI设计</NavLink></li>
                        <li><NavLink activeClassName="selected" to="/classic/two">包装设计</NavLink></li>
                        <li><NavLink activeClassName="selected" to="/classic/three">网站设计</NavLink></li>
                        <li><NavLink activeClassName="selected" to="/classic/four">空间设计</NavLink></li>
                        <li><NavLink activeClassName="selected" to="/classic/five">电商设计</NavLink></li>
                    </ul>
                </div>
                <div className="con">
                    <Route path="/classic/one" component={One}></Route>
                    <Route path="/classic/two" component={Two}></Route>
                    <Route path="/classic/three" component={Three}></Route>
                    <Route path="/classic/four" component={Four}></Route>
                    <Route path="/classic/five" component={Five}></Route>
                </div>
            </div>
        );
    }
}

export default Clcase;