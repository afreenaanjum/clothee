import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IContainerProps} from '../../interfaces/interface';
const Center: React.FC<IContainerProps> = ({
  children,
  style,
}: IContainerProps) => {
  return <View style={[styles.center, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Center;
