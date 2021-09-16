import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import PDPScreen from '../../components/PDP/PDP';
import {RootStackParamList} from '../../navigation/RouteStackParamList';
import {RoutesConstants} from '../../utils/RouteEnums';

const DetailsScreen = () => {
  const route =
    useRoute<
      RouteProp<RootStackParamList, RoutesConstants.PRODUCT_DETAILS_SCREEN>
    >();

  const {product} = route.params;

  return <PDPScreen product={product} />;
};

export default DetailsScreen;
