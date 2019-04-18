import React, {Component} from 'react';
import $ from "jquery";


import "./index.scss"

import {
    Input,
    Button
} from "antd";



class Contact extends Component {

    state = {
        name: "",
        tel: "",
        msg: ""
    }


    //姓名
    handleName = (e)=>{
        this.setState({
            name:e.target.value
        })
    }

    //电话
    handleTel = (e)=>{
        this.setState({
            tel: e.target.value
        })
    }

    //留言
    handleMsg = (e) =>{
        this.setState({
            msg: e.target.value
        })
    }

    //重置
    handleReset = ()=>{
        this.setState({
            name: "",
            tel: "",
            msg: ""
        })
    }

    //提交
    handleSub = () => {
        let that = this;
        if(!(this.state.name&&this.state.tel&&this.state.email&&this.state.message)) return alert("请填写完整")
        $.post({
            url:"http://localhost:3001/",
            type:"POST",
            data:this.state,
            success: function (data) {
                alert("提交成功")
                that.hangleReset()
            },
            error: function () {
                console.log("失败")
            }

        })

    }

    render() {
        return (
            <div className="contact">
                <div className="tit">
                    <h2>CONTACT US</h2>
                    <h2>联系我们</h2>
                </div>
                    <div className="form">
                        <div className="name">
                            <Input value={this.state.name} onChange={this.handleName} placeholder="姓名:"/>
                        </div>
                        <div className="tel">
                            <Input value={this.state.tel} onChange={this.handleTel} placeholder="电话:"/>
                        </div>
                        <div className="msg">
                            <Input.TextArea value={this.state.msg} onChange={this.handleMsg} placeholder="留言:"/>
                        </div>
                        <div className="btn">
                            <Button className="sub" onClick={this.handleSub}>提 交</Button>
                            <Button className="reset" onClick={this.handleReset}>重 置</Button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Contact;