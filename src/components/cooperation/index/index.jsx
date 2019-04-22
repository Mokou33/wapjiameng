import React, {Component} from 'react';

import Banner from "../../banner";
import Coop from "../coop";
import Type from "../type";

import Contact from "../../contact";
import Footer from "../../footer";





class Cooperation extends Component {
    render() {
        return (
            <div>
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