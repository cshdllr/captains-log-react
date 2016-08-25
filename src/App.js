import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';

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

class LogTextArea extends React.Component {

  preventBackspace( event ) {
    if (event.which === 8) {
      event.preventDefault();
    }
  }

  render() {
    return <textarea onKeyDown={ this.preventBackspace }></textarea>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
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
