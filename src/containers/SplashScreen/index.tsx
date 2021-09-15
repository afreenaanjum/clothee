import React, {useEffect} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import {RoutesConstants} from '../../utils/RouteEnums';
import Container from '../../components/Container';
import {IProps} from '../../interfaces/interface';

const SplashScreen: React.FC<IProps> = ({navigation}: IProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(RoutesConstants.HOME_SCREEN);
    }, 1000);
  }, [navigation]);

  return (
    <Container style={styles.splashScreen}>
      <Text style={styles.appName}>CLOTHEE</Text>
      <ActivityIndicator />
    </Container>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    backgroundColor: '#FF1696',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {fontSize: 50, fontWeight: '600'},
});

export default SplashScreen;
