import React, {Component} from 'react';

import Banner from "../../banner";
import Content from "../content";
import Sale from "../sale";
import Product from "../product";
import Gene from "../gene";
import Contact from "../../contact";
import Footer from "../../footer";




class Rare extends Component {

    componentDidMount() {
        this.node.scrollIntoView()
    }

    render() {
        return (
            <div ref={node => this.node = node}>
                <Banner />
                <Content />
                <Sale />
                <Product />
                <Gene />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Rare;