import React, { Component } from 'react'

export default class DataBase extends Component {
    render() {
        
        const {oneTask,order}=this.props;
        const {email,name,passowrd,numberphone}=oneTask;
        return (
            <div>
                <span>{order} This is email {email} this is {name} this is {passowrd} this is {numberphone}</span>
            </div>
        )
    }
}
