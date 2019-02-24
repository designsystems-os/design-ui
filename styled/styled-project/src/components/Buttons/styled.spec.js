import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from './styled';

/////////////////////////////////////////
/* Your Styled Button Tests Go Here... */
/////////////////////////////////////////

/*
 * Default Styles
 */
test('it renders default styles', () => {
  const component = TestRenderer.create(<Button />).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule('background', '#2a52fb');
  expect(component).toHaveStyleRule('color', '#fff');
  expect(component).toHaveStyleRule('border', 'none');
  expect(component).toHaveStyleRule('border-radius', '5px');
  expect(component).toHaveStyleRule('font-size', '16px');
  expect(component).toHaveStyleRule('font-weight', '400');
  expect(component).toHaveStyleRule('margin', '5px');
  expect(component).toHaveStyleRule('padding', '10px 14px');
  expect(component).toHaveStyleRule('display', 'flex');
  expect(component).toHaveStyleRule('text-align', 'center');
  expect(component).toHaveStyleRule('outline', 'none');
  expect(component).toHaveStyleRule('cursor', 'pointer');
  expect(component).toHaveStyleRule(
    'transition',
    '200ms cubic-bezier(0.465,0.183,0.153,0.946)',
  );
  expect(component).toHaveStyleRule('background', '#a3b5ff', {
    modifier: '&:hover',
  });
  expect(component).toHaveStyleRule('color', '#000', {
    modifier: '&:hover',
  });
});

/*
 * Custom Styles
 */
test('it renders custom styles', () => {
  const component = TestRenderer.create(
    <Button
      bg="#6b41d2"
      bgActive="#976dff"
      colorActive="#444"
      br="10px"
      fw="600"
      transition="250ms ease-out"
    />,
  ).toJSON();
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule('background', '#6b41d2');
  expect(component).toHaveStyleRule('background', '#976dff', {
    modifier: '&:hover',
  });
  expect(component).toHaveStyleRule('color', '#444', {
    modifier: '&:hover',
  });
  expect(component).toHaveStyleRule('border-radius', '10px');
  expect(component).toHaveStyleRule('font-weight', '600');
  expect(component).toHaveStyleRule('transition', '250ms ease-out');
});
