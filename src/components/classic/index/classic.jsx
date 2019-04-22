import React, {Component} from 'react';

import Banner from "../../banner";
import Clcase from "../clcase";
import Contact from "../../contact";
import Footer from "../../footer";






class Classic extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Clcase />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Classic;