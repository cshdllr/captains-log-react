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

class CurrentDate extends React.Component {
  render() {
    var today = new Date();
    var dd = today.getDate();

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"];
    var day = days[today.getDay()];

    var months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    var month = months[today.getDay()];

    function ordinal(dd) {
      if(dd > 20 || dd < 10) {
        switch(dd%10) {
          case 1:
            return "st";
          case 2:
            return "nd";
          case 3:
            return "rd";
        }
      }
      return "th";
    }

    var suffix = ordinal(dd);
    dd = dd + suffix;

    return <h2>{day + ", " + month + " " + dd}</h2>;
  }
}

class LogTextArea extends React.Component {

  preventBackspace(event) {
    if (event.which === 8) {
      event.preventDefault();
    }
  }

  render() {
    var prompts = [
      "Life gives you plenty of time to do whatever you want to do if you stay in the present moment. -Deepak Chopra",
      "In the midst of movement and chaos, keep stillness inside of you. -Deepak Chopra",
      "You don't look out there for God, something in the sky, you look in you. -Alan Watts"
    ];
    var prompt = prompts[Math.floor(Math.random()*prompts.length)];

    return <textarea
      autofocus="true"
      onKeyDown={this.preventBackspace}
      placeholder={prompt}></textarea>;
  }
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
