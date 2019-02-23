import styled from 'styled-components';
import PropTypes from 'prop-types';

/////////////////////////////////
/* Your Card Styles Go Here... */
/////////////////////////////////

const Card = styled.div`
  display: ${props => (props.display ? props.display : 'flex')};
  height: ${props => (props.height ? props.height : '100px')};
  width: ${props => (props.width ? props.width : '100px')};
  border-radius: ${props => (props.br ? props.br : 0)};
`;

Card.propTypes = {
  display: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  br: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Card.defaultProps = {
  display: 'flex',
  height: '100px',
  width: '100px',
  br: 0,
};

export default Card;
