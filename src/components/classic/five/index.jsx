import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Five extends Component {

    state = {
        arr : [41,42,43,44]
    }

    render() {
        return (
            <div className="five">
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

export default Five;