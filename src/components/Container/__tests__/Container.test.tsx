import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Container from '../Container';

describe('Center widget', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Container children={<Text>Container</Text>} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when no children', () => {
    const tree = renderer.create(<Container children={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
