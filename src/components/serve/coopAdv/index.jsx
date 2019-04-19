import React, {Component} from 'react';


import "./index.scss"

class CoopAdv extends Component {
    render() {
        return (
            <div className="cooAdv">
                <div className="tit">
                    <h2>6 ADVANTAGES OF COOPERATION</h2>
                    <h2>6大合作优势</h2>
                </div>
                <div className="cooDtails">
                    <h3>为企业打造强引擎</h3>
                    <div className="cooCon">
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_01.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_02.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_03.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_04.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_05.png")} alt=""/>
                        </div>
                        <div className="cooPic">
                            <img src={require("../../../assets/img/server/conAdv_06.png")} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CoopAdv;