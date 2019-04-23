import React, {Component} from 'react';



import Banner from "../../banner";
import Explanation from "../explanation";
import Design from "../design";
import Includ from "../includ";
import Plan from "../plan";
import Tactic from "../tactic";
import Diffuse from "../diffuse";
import Pack from "../pack";
import Train from "../train";
import Contact from "../../contact";
import Footer from "../../footer";








class Recommend extends Component {

    componentDidMount() {
        this.node.scrollIntoView()
    }

    render() {
        return (
            <div ref={node => this.node = node}>
                <Banner />
                <Explanation />
                <Design />
                <Includ />
                <Plan />
                <Tactic />
                <Diffuse />
                <Pack />
                <Train />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Recommend;