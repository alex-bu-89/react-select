import React from 'react';

class Select extends React.Component {
  constructor (props) {
		super(props);
    this.state = {
			inputValue: this.props.value || '',
			isOpen: false,
		};
  }

  render() {
    return (
      <section className='select-box'>
        hello select
      </section>
    );
  }
}

export default Select;
