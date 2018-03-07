import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleMouseDownSelect = this.handleMouseDownSelect.bind(this);
    this.handleMouseDownItem = this.handleMouseDownItem.bind(this);

    this.state = {
      value: this.props.value,
      options: this.props.options,
      isOpen: true,
      isSearchable: false,
    };
  }

  handleChange(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ value: e.target.value });
  }

  handleMouseDownSelect(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleMouseDownItem(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  renderDropdown() {
    if (this.state.isOpen) {
      return (
        <div className="select-box--options">
          {
            this.state.options.map((option, i) =>
              <button onMouseDown={this.handleMouseDownItem} key={i}>{option}</button>)
          }
        </div>
      );
    }

    return null;
  }

  render() {
    return (
      <section className="select-box">
        <input
          type="text"
          name="select-box"
          onChange={this.handleChange}
          onMouseDown={this.handleMouseDownSelect}
          value={this.state.value}
          readOnly={!this.state.isSearchable}
        />

        {this.renderDropdown()}
      </section>
    );
  }
}

Select.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Select.defaultProps = {
  value: '',
};

export default Select;
