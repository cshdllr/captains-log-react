import React from 'react';

class LogTextArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // This is causing some problems. need to figure out setting default state
      // visibility: hidden
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.which === 8) {
      event.preventDefault();
      this.setState({

      });
      console.log("testing")
    } else if (event.which === 74) {
      console.log("j was pressed")
    }
  }

  render() {
    var prompts = [
      "Life gives you plenty of time to do whatever you want to do if you stay in the present moment. -Deepak Chopra",
      "In the midst of movement and chaos, keep stillness inside of you. -Deepak Chopra",
      "You don't look out there for God, something in the sky, you look in you. -Alan Watts"
    ];
    var prompt = prompts[Math.floor(Math.random()*prompts.length)];

    console.log(this.state.color);
    return (
      <div>
        <div id="warningMessage" style={{visibility: this.state.visibility}}>
          Hello
        </div>
        <textarea
          onKeyDown={this.handleKeyPress}
          placeholder={prompt}>
        </textarea>
      </div>
    );
  }
}

export default LogTextArea;
