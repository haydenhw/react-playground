import React from 'react';

class RouletteGun {
  static defaultProps = {
    bulletInChamber: 8,
  };

  constructor() {
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
  }

  componentDidMount() {
  }

  pullTrigger() {
    this.setState({ spinningTheChamber: true});
    setTimeout(() => {
      const number = Math.ceil(Math.random() * 8);
      this.setState({chamber: number, spinningTheChamber: false});
    }, 2000)
  }

  render() {
    let msg = `you're safe'`;
    if (this.state.spinningTheChamber) msg = 'spinning the chamber and pulling the trigger!';
    if (this.state.chamber === this.props.bulletInChamber) msg = 'BANG!!!';

    return (
      <div>
        <p>{msg}</p>
        <button onClick={this.pullTrigger}>Pull the trigger</button>
      </div>
    );
  }
}

export default RouletteGun;
