import React from 'react';

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

export default LogTextArea;
