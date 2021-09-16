import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Center from '../Center';

describe('Center widget', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Center children={<Text>Center</Text>} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when no children', () => {
    const tree = renderer.create(<Center children={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
