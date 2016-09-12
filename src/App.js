import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import LogTextArea from './LogTextArea';
import CurrentDate from './CurrentDate';

const responseFacebook = (response) => {

  // need to figure out how to handle login

  console.log(response);
  console.log(response.status);
  window.location.assign("http://www.w3schools.com");
  //
  // if (response.status === ) {
  //   window.location.assign("http://www.w3schools.com");
  // }
  // // return error message here
  // return
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <CurrentDate />
        </div>
        <LogTextArea />
        <FacebookLogin
          appId="1761265884087775"
          autoLoad={false} // cookie. change to true after development
          fields="name,email,picture"
          callback={responseFacebook} />

      </div>
    );
  }
}

export default App;
