import React from 'react'


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    let date =this.state.date.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }) ;
    return (
      <div>
          <h1>{this.state.date.toLocaleTimeString()}</h1> <h1>{date}</h1>

      </div>
    );
  }
}

export default Clock;
