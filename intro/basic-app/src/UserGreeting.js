import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }
    render() {

 //Element variables 
    let message;
    if(this.state.isLoggedIn){
        message = <div>Hello Vishwas</div>
    }
    else{
        message = <div>Hello Guest</div>
    }
    return <div>{message}</div>;
        

// if else conditional
    //     if(this.state.isLoggedIn){
    //         return (
    //             <div>
    //                 <p>Hello Vishwas</p>
    //             </div>
    //         )
    //     }
    //     else{
    //         return (
    //             <div>
    //                 <p>Hello Guest</p>
    //             </div>
    //         )
    //     }

     }
}
    
export default UserGreeting;