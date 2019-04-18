import React, {Component} from 'react';


import Header from "../header";
import Banner from "../banner";
import Introduce from "../introduce";
import Honour from "../honour";
import Values from "../values";
import Method from "../method";
import Team from "../team";
import Contact from "../contact";









class Home extends Component {
    render() {
        return (
            <div >
                <Header />
                <Banner />
                <Introduce />
                <Honour />
                <Values />
                <Method />
                <Team />
                <Contact />
            </div>
        );
    }
}

export default Home;