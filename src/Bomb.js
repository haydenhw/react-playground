import React from 'react';

class Bomb extends React.Component{
  constructor() {
    this.interval;
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({count: this.state.count + 1})
    })
  }

  render() {
    const {count} = this.state;
    let msg;
    if (count % 2 === 0) msg = 'tick';
    if (count % 2 === 1) msg = 'tock';
    if (count >= 8 )  {
      msg = 'BOOM!!!';
      this.interval.clear()
    }
    return (
      <div>
        <p>{msg}</p>
      </div>
    );
  }
}

export default Bomb;
