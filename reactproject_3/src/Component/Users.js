import React, { Component } from 'react'

export default class Users extends Component {
  
    TextChange=(e)=>{
        this.setState({date:e.target.value})
     }
     getButtton=()=>{
        this.props.get(this.state.tas)
     }
     UpdateButtton=()=>{
        this.props.up(this.state.date)
     }
     CreateButtton=()=>{
        this.props.Create(this.state.date)
     }
     DeleteButtton=()=>{
        this.props.Delete(this.state.date)
     }
    render() {
        return (
            
            <div className="Users">
                <h1>Users Information</h1>
                <table>  
                    <tr>
                <td><input onChange={this.TextChange} type='Email' placeholder="Email"></input></td>
                </tr>
                    <tr>
                <td><input onChange={this.TextChange} type='text' placeholder="Name"></input></td>
                </tr>
                    <tr>
                <td><input onChange={this.TextChange} type='Password' placeholder="Password"></input></td>
                </tr>
                    <tr>
                <td><input onChange={this.TextChange} type='Number' placeholder="Number Phone"></input></td>
                </tr>
               </table>
               <button onClick={this.getButtton}>Get</button>
               <button onClick={this.UpdateButtton}>Update</button>
               <button onClick={this.CreateButtton}>Create</button>
               <button onClick={this.DeleteButtton}>Delete</button>
               <button onClick={()=>{this.props.history.push('/home')}}>Go To Home</button>
               <button onClick={()=>{this.props.history.push('/about')}}>Go To About</button>
            </div>
            
        )
    }
}

