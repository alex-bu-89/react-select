import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor (props) {
		super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
			value: this.props.value || '',
			options: this.props.options,
			isOpen: true,
		};
  }

  handleChange (e) {
    e.stopPropagation();
		e.preventDefault();
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <section className='select-box'>
        <input type="text" name="select-box" onChange={(e) => { this.handleChange(e) }} value={ this.state.value } />
        <ul className="select-box--options">
          { this.state.isOpen
            && (
              this.state.options.map((option, i) => {
                return <li key={i}>{ option }</li>
              })
            )
          }
        </ul>
      </section>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array.isRequired
}

export default Select;
