import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IContainerProps} from '../interfaces/interface';
const Container: React.FC<IContainerProps> = ({
  children,
  style,
}: IContainerProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({container: {flex: 1}});

export default Container;
