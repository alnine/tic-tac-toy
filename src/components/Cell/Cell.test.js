import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Cell from './Cell';

it('render correctly cell component', () => {
  const CellComponent = renderer.create(<Cell />).toJSON();
  expect(CellComponent).toMatchSnapshot();
});

it('render cell correctly with null value', () => {
  const CellComponent = mount(<Cell value={null} />);
  expect(CellComponent.prop('value')).toEqual(null);
});

it('check cell value', () => {
  const CellComponent = mount(<Cell value="X" />);
  expect(CellComponent.text()).toEqual('X');
});

it('check the onClick is working', () => {
  const onClick = jest.fn();
  const CellComponent = mount(<Cell onClick={onClick} />);
  CellComponent.simulate('click');
  expect(onClick).toBeCalledTimes(1);
});
