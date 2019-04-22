import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Two extends Component {

    state = {
        arr :[11,12,13,14,15,16,17,18]
    }



    render() {
        return (
            <div className="two">
                <ul className="conUl">
                    {
                        this.state.arr.length>0 && (
                            this.state.arr.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <Link  to={`/classic/details/${item}`}>
                                            <img src={require(`../../../assets/img/case/${item}.jpg`)} alt="case"/>
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Two;