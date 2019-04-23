import React, {Component} from 'react';

import Banner from "../../banner";
import Clcase from "../clcase";
import Contact from "../../contact";
import Footer from "../../footer";






class Classic extends Component {

    componentDidMount() {
        this.node.scrollIntoView()
    }


    render() {
        return (
            <div ref={node => this.node = node}>
                <Banner />
                <Clcase />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Classic;