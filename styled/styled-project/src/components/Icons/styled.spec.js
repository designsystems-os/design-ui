import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import Icon from './styled';

////////////////////////////////////////
/* Your Styled Icon Tests Go Here...  */
////////////////////////////////////////

/*
 * Default Styles
 */
test('it renders default styles', () => {
  const component = TestRenderer.create(<Icon />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule('height', '40px');
  expect(component).toHaveStyleRule('width', '40px');
});

/*
 * Custom Styles
 */
test('it renders custom styles', () => {
  const component = TestRenderer.create(
    <Icon height="28px" width="28px" />,
  ).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule('height', '28px');
  expect(component).toHaveStyleRule('width', '28px');
});
