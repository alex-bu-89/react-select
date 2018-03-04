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
        <input type="text" name="select-box" />
      </section>
    );
  }
}

export default Select;
