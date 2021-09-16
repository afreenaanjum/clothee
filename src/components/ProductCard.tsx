import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IProductCardProps} from '../interfaces/interface';
import {RootStackParamList} from '../navigation/RouteStackParamList';
import {RoutesConstants} from '../utils/RouteEnums';
import Container from './Container/Container';

const ProductCard: React.FC<IProductCardProps> = ({
  product,
}: IProductCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Container style={styles.card}>
      <TouchableOpacity
        activeOpacity={1}
        key={product['PRODUCT ID']}
        onPress={() => {
          navigation?.navigate(RoutesConstants.PRODUCT_DETAILS_SCREEN, {
            product: product,
          });
        }}>
        <Container style={{aspectRatio: 1}}>
          <Image
            source={{uri: product.IMAGE, cache: 'force-cache'}}
            resizeMode="contain"
            style={styles.h100}
            defaultSource={require('../assets/images/loading-buffering.gif')}
          />
        </Container>
        <Container style={styles.details}>
          <Container>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.productName}>
              {product.NAME}
            </Text>
          </Container>
          <View style={styles.bookmark}>
            <Image
              source={require('../assets/images/bookmark-16.png')}
              height={24}
            />
          </View>
        </Container>
        <Text>{product?.PRICE ?? ''}</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    minHeight: 210,
    marginRight: 2,
    marginBottom: 2,
    padding: 8,
    borderRadius: 5,
  },
  details: {
    marginTop: 10,
    flexDirection: 'row',
  },
  h100: {
    height: '100%',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF1696',
  },
  bookmark: {alignSelf: 'center', paddingLeft: 10},
});

export default ProductCard;
