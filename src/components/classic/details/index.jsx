import React, {Component} from 'react';

import  "./index.scss";
import Header from "../../header";

import Footer from "../../footer";




class Details extends Component {

    componentDidMount() {
        this.node.scrollIntoView();
    }


    render() {
        const url = this.props.match.params.url
        return (
            <div className='details' ref={node => this.node = node}>
                <Header />
                {
                    url<10?<img src={require(`../../../assets/img/case/to_0${url}.jpg`)} alt="details"/>:<img src={require(`../../../assets/img/case/to_${url}.jpg`)} alt="details"/>
                }
                <Footer />
            </div>
        );
    }
}

export default Details;