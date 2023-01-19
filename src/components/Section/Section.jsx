import { Title, Wrapper } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {children}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
