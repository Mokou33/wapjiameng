import React, {Component} from 'react';

import "./index.scss"

import {Carousel } from "antd";

import Header from "../header";



class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <Header />
                <Carousel autoplay>
                    <div><img src={require("../../assets/img/banner/banner1.png")} alt="banner1"/></div>
                    <div><img src={require("../../assets/img/banner/banner2.png")} alt="banner2"/></div>
                </Carousel>

            </div>
        );
    }
}

export default Banner;