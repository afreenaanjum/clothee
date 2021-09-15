import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {RootStackParamList} from '../navigation/RouteStackParamList';
import {RoutesConstants} from '../utils/RouteEnums';

export interface IContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

export interface IProduct {
  'SERIAL NO': number;
  NAME: string;
  CATEGORY: string;
  'DESCRIPTION & COLOR': string;
  FABRIC: string;
  IMAGE: string;
  SIZE: string;
  PRICE: number;
  'PRODUCT ID': number;
  WEBSITE: string;
  'PRODUCT URL': string;
}

export interface IProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    RoutesConstants.HOME_SCREEN
  >;
}

// export interface IPdpProps {
//   navigation: NativeStackNavigationProp<
//     RootStackParamList,
//     RoutesConstants.PRODUCT_DETAILS_SCREEN
//   >;
// }

export interface IProductCardProps {
  product: IProduct;
}
