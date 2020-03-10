import React from 'react';
import renderer from 'react-test-renderer';
import Board from './Board';

it('render correctly board component', () => {
  const BoardComponent = renderer.create(<Board />).toJSON();
  expect(BoardComponent).toMatchSnapshot();
});
