import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor (props) {
		super(props);
    this.state = {
			value: this.props.value || '',
			options: this.props.options,
			isOpen: false,
		};
  }

  render() {
    return (
      <section className='select-box'>
        <input type="text" name="select-box" value={this.state.value} />
        <ul className="select-box--options">
          { this.state.showResults
            && (
              this.state.options.map((option, i) => {
                return <li key={i}>{option}</li>
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
