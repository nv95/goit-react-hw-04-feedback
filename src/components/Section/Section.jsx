import PropTypes from 'prop-types';
import { SectionEl, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      {title && <Title>{title}</Title>}
      {children}
    </SectionEl>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};
