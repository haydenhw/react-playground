import React from 'react';

class HelloWorld {
  state = { message: 'Freind' }
  render() {
    setMsg(msg) {
      this.setState({ msg })
    }
    return (
      <div>
        <p>
        {`Hello,  ${this.state.msg}!`}
      </p>
        <button onClick={this.setMsg()}>Friend</button>
        <button onClick={this.setMsg()}>React</button>
        <button onClick={this.setMsg()}>World</button>
      </div>
    );

  }
}

export default HelloWorld;
