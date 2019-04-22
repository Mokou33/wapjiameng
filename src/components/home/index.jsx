import React, {Component} from 'react';


import Banner from "../banner";
import NavBar from "../navBar";

import Introduce from "../introduce";
import Honour from "../honour";
import Values from "../values";
import Method from "../method";
import Team from "../team";
import Contact from "../contact";
import Footer from "../footer";










class Home extends Component {
    render() {
        return (
            <div >
                <Banner />
                <NavBar />
                <Introduce />
                <Honour />
                <Values />
                <Method />
                <Team />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home;