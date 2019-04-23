import React, {Component} from 'react';

import Banner from "../../banner";
import Coop from "../coop";
import Type from "../type";

import Contact from "../../contact";
import Footer from "../../footer";





class Cooperation extends Component {

    componentDidMount() {
        this.node.scrollIntoView()
    }


    render() {
        return (
            <div ref={node => this.node = node}>
                <Banner />
                <Coop />
                <Type />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Cooperation;