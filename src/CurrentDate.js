import React from 'react';

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

export default CurrentDate;
