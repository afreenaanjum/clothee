import React from 'react';
import {StyleSheet, Text, Image, ActivityIndicator} from 'react-native';
import {IProductCardProps} from '../interfaces/interface';
import Container from './Container';

const PDP: React.FC<IProductCardProps> = ({product}: IProductCardProps) => {
  return (
    <Container style={styles.card}>
      <Container style={styles.imageContainer}>
        <Image
          source={{uri: product.IMAGE, cache: 'force-cache'}}
          onProgress={() => <ActivityIndicator />}
          resizeMode="contain"
          style={styles.h100}
        />
      </Container>
      <Container>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.productName}>
          {product.NAME}
        </Text>
        <Text style={styles.productPrice}>Rs {product.PRICE}</Text>
        <Text style={styles.productDes}>{product['DESCRIPTION & COLOR']}</Text>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageContainer: {aspectRatio: 1, alignSelf: 'center'},
  productDes: {
    color: 'grey',
  },
  productPrice: {
    fontWeight: '600',
  },
  h100: {
    height: '100%',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF1696',
    marginTop: 10,
  },
  w100: {minWidth: '100%'},
});

export default PDP;
