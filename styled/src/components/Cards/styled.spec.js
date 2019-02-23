import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import Card from './styled';

////////////////////////////////////////
/* Your Styled Card Tests Go Here...  */
////////////////////////////////////////

/*
 * Default Styles
 */
test('it renders default styles', () => {
  const component = TestRenderer.create(<Card />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule('display', 'flex');
});

/*
 * Custom Styles
 */
test('it renders custom styles', () => {
  const component = TestRenderer.create(<Card display="grid" />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule('display', 'grid');
});
