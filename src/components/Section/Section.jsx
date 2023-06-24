import { Component } from 'react';
import PropTypes from 'prop-types';
import SectionFeedback from './Section.styled';

class Section extends Component {
  static defaultProps = { title: '' };
  render() {
    const { title, children } = this.props;
    return (
      <SectionFeedback>
        <h2>{title}</h2> {children}
      </SectionFeedback>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
