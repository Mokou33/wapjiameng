import React, {Component} from 'react';

import "./index.scss"

class Product extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="product">
                    <div className="con">
                        <h2><span>产品</span>问题咨询</h2>
                        <p>1，产品打不开市场？</p>
                        <p>2，产品认知度低，市场不了解产品？</p>
                        <p>3，产品卖点不清晰，无法解决其中的痛点？</p>
                        <p>4，产品通路少，渠道无法铺开？</p>
                        <p>5，产品定价没优势，毛利无法覆盖成本？</p>
                        <p>......</p>
                    </div>
                    <div className="pic">
                        <img src={require("../../../assets/img/rare/rare_02.png")} alt="产品问题咨询"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;