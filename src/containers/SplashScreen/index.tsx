import React, {useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import {RoutesConstants} from '../../utils/RouteEnums';
import {IProps} from '../../interfaces/interface';
import Center from '../../components/Center';

const SplashScreen: React.FC<IProps> = ({navigation}: IProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(RoutesConstants.HOME_SCREEN);
    }, 1000);
  }, [navigation]);

  return (
    <Center style={styles.splashScreen}>
      <Text style={styles.appName}>CLOTHEE</Text>
    </Center>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    backgroundColor: '#FF1696',
  },
  appName: {fontSize: 50, fontWeight: '600'},
});

export default SplashScreen;
