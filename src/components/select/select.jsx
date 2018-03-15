import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleMouseDownSelect = this.handleMouseDownSelect.bind(this);
    this.handleMouseDownItem = this.handleMouseDownItem.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      value: this.props.value,
      options: this.props.options,
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(e) {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.setState({
        isOpen: false,
      });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleMouseDownSelect() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleMouseDownItem(e) {
    // @TODO dont trust user unput
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      isOpen: false,
      value: e.target.innerText,
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
      <section className="select-box" ref={this.setWrapperRef}>
        <input
          type="text"
          name="select-box"
          onChange={this.handleChange}
          onMouseDown={this.handleMouseDownSelect}
          value={this.state.value}
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
