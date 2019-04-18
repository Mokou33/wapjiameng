import React, {Component} from 'react';


import "./index.scss"


class Team extends Component {
    render() {
        return (
            <div className="team">
                <div className="tit">
                    <h2><span>豪华招商团队</span> 实战经验丰富</h2>
                </div>
                <div className="con">
                    <img src={require("../../assets/img/team/team_01.png")} alt="赵东升"/>
                    <img src={require("../../assets/img/team/team_02.png")} alt="陈丰洲"/>
                </div>

            </div>
        );
    }
}

export default Team;