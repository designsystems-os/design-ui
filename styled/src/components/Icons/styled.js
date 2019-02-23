import styled from 'styled-components';
import PropTypes from 'prop-types';

/////////////////////////////////
/* Your Icon Styles Go Here... */
/////////////////////////////////
const Icon = styled.div`
  display: ${props => (props.display ? props.display : 'flex')};
  height: ${props => (props.height ? props.height : '40px')};
  width: ${props => (props.width ? props.width : '40px')};
  border-radius: ${props => (props.br ? props.br : '50%')};
  cursor: pointer;
  transition: ${props =>
    props.transition ? props.transition : '200ms ease-out'};

  &:hover,
  &:focus,
  &:active {
    background: ${props =>
      props.bgActive ? props.bgActive : 'rgba(0, 0, 0, 0.1)'};
    color: ${props => (props.colorActive ? props.colorActive : '#000')};
  }
`;

Icon.propTypes = {
  display: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  br: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  transition: PropTypes.string,
  bgActive: PropTypes.string,
  colorActive: PropTypes.string,
};

Icon.defaultProps = {
  display: 'flex',
  height: '40px',
  width: '40px',
  br: '50%',
  transition: '200ms ease-out',
  bgActive: 'rgba(0, 0, 0, 0.1)',
  colorActive: '#000',
};

export default Icon;
