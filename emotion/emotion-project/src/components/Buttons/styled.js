import styled from '@emotion/styled';
import PropTypes from 'prop-types';

///////////////////////////////////
/* Your Button Styles Go Here... */
///////////////////////////////////
const Button = styled.button`
  background: ${props => (props.bg ? props.bg : '#2a52fb')};
  color: ${props => (props.color ? props.color : '#fff')};
  border: ${props => (props.border ? props.border : 'none')};
  border-radius: ${props => (props.br ? props.br : '5px')};
  font-size: ${props => (props.fs ? props.fs : '16px')};
  font-weight: ${props => (props.fw ? props.fw : '400')};
  margin: ${props => (props.margin ? props.margin : '5px')};
  padding: ${props => (props.padding ? props.padding : '10px 14px')};
  display: ${props => (props.display ? props.display : 'flex')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  outline: none;
  cursor: pointer;
  transition: ${props =>
    props.transition
      ? props.transition
      : '200ms cubic-bezier(0.465, 0.183, 0.153, 0.946)'};

  &:hover,
  &:focus,
  &:active {
    background: ${props => (props.bgActive ? props.bgActive : '#a3b5ff')};
    color: ${props => (props.colorActive ? props.colorActive : '#000')};
  }
`;

Button.propTypes = {
  bg: PropTypes.string,
  bgActive: PropTypes.string,
  color: PropTypes.string,
  colorActive: PropTypes.string,
  border: PropTypes.string,
  br: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fs: PropTypes.string,
  fw: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.string,
  padding: PropTypes.string,
  display: PropTypes.string,
  textAlign: PropTypes.string,
  transition: PropTypes.string,
};

Button.defaultProps = {
  bg: '#2a52fb',
  bgActive: '#a3b5ff',
  color: '#fff',
  colorActive: '#000',
  border: 'none',
  br: 0,
  fs: '16px',
  fw: '400',
  margin: '5px',
  padding: '10px 14px',
  display: 'flex',
  textAlign: 'center',
  transition: '200ms cubic-bezier(0.465, 0.183, 0.153, 0.946)',
};

export default Button;
