import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../containers/HomeScreen/index';
import ProductDetailsScreen from '../containers/ProductDetailsScreen/index';
import SplashScreen from '../containers/SplashScreen/index';
import {RoutesConstants} from '../utils/RouteEnums';
import {RootStackParamList} from './RouteStackParamList';

interface RouteProps {}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC<RouteProps> = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={RoutesConstants.SPLASH_SCREEN}>
      <Stack.Screen
        name={RoutesConstants.SPLASH_SCREEN}
        component={SplashScreen}
        options={{header: () => null}}
      />
      <Stack.Screen name={RoutesConstants.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={RoutesConstants.PRODUCT_DETAILS_SCREEN}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
