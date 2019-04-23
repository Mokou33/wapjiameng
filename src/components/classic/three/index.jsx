import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Three extends Component {

    state = {
        arr: [21,22,23,24]
    }

    render() {
        return (
            <div className="three" >
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

export default Three;