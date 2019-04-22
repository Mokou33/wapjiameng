import React, {Component} from 'react';

import {
    Link,
} from "react-router-dom";




class One extends Component {

    state = {
        arr : [1,2,3,4,5,6,7,8]
    }



    render() {
        // const path = this.props.match.path;
        return (
            <div className="one">
                <ul className="conUl">
                    {
                        this.state.arr.length>0 && (
                            this.state.arr.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <Link  to={`/classic/details/${item}`}>
                                            <img src={require(`../../../assets/img/case/0${item}.jpg`)} alt="case"/>
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

export default One;