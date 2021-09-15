import {IProductCardProps, IProps} from '../interfaces/interface';
import {RoutesConstants} from '../utils/RouteEnums';

export type RootStackParamList = {
  [RoutesConstants.SPLASH_SCREEN]: IProps;
  [RoutesConstants.HOME_SCREEN]: undefined;
  [RoutesConstants.PRODUCT_DETAILS_SCREEN]: IProductCardProps;
};
