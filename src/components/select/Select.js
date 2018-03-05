import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);

    this.state = {
      value: this.props.value || '',
      options: this.props.options,
      isOpen: false,
      isSearchable: false
    };
  }

  handleChange(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  handleMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderDropdown() {
    if (this.state.isOpen) {
      return (
        <ul className="select-box--options">
          {
            this.state.options.map((option, i) => {
              return <li key={i}>{option}</li>
            })
          }
        </ul>
      )
    }
  }

  render() {
    return (
      <section className='select-box'>
        <input type="text"
          name="select-box"
          onChange={(e) => {this.handleChange}} 
          onMouseDown={this.handleMouseDown}
          value={this.state.value}
          readOnly={!this.state.isSearchable}/>

        {this.renderDropdown()}
      </section>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array.isRequired
}

export default Select;
