import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  constructor(props) {
    super(props);

    [
      'handleChange',
      'handleMouseDownSelect',
      'handleMouseDownItem',
      'setWrapperRef',
      'handleClickOutside',
      'renderArrow',
    ].forEach((item) => {
      this[item] = this[item].bind(this);
    });

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
    // @TODO dont trust user input
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

  renderArrow() {
    return (
      <span class="fi-icon-name" title="icon name" aria-hidden="true"></span>
    );
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
        {this.renderArrow()}
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
