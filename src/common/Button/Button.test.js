import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './Button';

it('render correctly button component', () => {
  const ButtonComponent = renderer.create(<Button />).toJSON();
  expect(ButtonComponent).toMatchSnapshot();
});

it('render button correctly with null label', () => {
  const ButtonComponent = mount(<Button label={null} />);
  expect(ButtonComponent.prop('label')).toEqual(null);
});

it('check text of button', () => {
  const ButtonComponent = mount(<Button label="Button text" />);
  expect(ButtonComponent.text()).toEqual('Button text');
});

it('check disabled state of button', () => {
  const ButtonComponent = mount(<Button disabled={Boolean(true)} />);
  expect(ButtonComponent.is('[disabled=true]')).toEqual(true);
});

it('check button on availability of class', () => {
  const ButtonComponent = mount(<Button className="test-class" />);
  expect(ButtonComponent.hasClass('test-class')).toEqual(true);
});

it('check the onClick is working', () => {
  const onClick = jest.fn();
  const ButtonComponent = mount(<Button onClick={onClick} />);
  ButtonComponent.simulate('click');
  expect(onClick).toBeCalledTimes(1);
});
