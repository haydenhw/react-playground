import React from 'react';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class Accordian extends React.Component {
  static defaultProps = {
    sections
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSectionEl: null
    };
  }

  handleClick(index) {
    this.setState({activeSectionEl: index})
  }

  render() {
    const sections = this.props.sections.map((section, index) => {
      return (
        <li key={index}>
          <h1>{section.title}</h1>
          <button onClick={() => this.handleClick(index)}>Expand</button>
          {
            this.state.activeSectionEl === index && <p>{section.content}</p>
          }
        </li>
      )
    });

    return (
      <ul>
        {sections}
      </ul>
    );
  }
}

export default Accordian;
