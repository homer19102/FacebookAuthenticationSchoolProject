import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';

import '../App.css';

export default class Facebook extends Component{
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email:'',
        picture: ''
    }
    responseFacebook = response => {
       console.log(response);

       this.setState({
           isLoggedIn: true,
           userID: response.UserID,
           name: response.name,
           email: response.email,
           picture: response.picture.data.url
       })
    }
    componentClicked = () => console.log('clicked');
    render(){

        let fbContent;
        if (this.state.isLoggedIn){
            fbContent = (
                <div className="Info">
                <img src={this.state.picture} alt={this.state.name}/>
                <h3 className="TextColor">Bem vindo<br></br> {this.state.name}</h3>
                <h5 className="TextColor">Email: {this.state.email}</h5>
                </div>
            );
        }else{
            fbContent =( <FacebookLogin
                appId="2737529959650219"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);
        }
        return(
            <div>
                {fbContent}
            </div>
        )
    }
}