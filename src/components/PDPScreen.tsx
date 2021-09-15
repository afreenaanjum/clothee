import React from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import {IProductCardProps} from '../interfaces/interface';
import Container from './Container';

const PDPScreen: React.FC<IProductCardProps> = ({
  product,
}: IProductCardProps) => {
  return (
    <Container style={styles.card}>
      <Container style={{aspectRatio: 1}}>
        <Image
          source={{uri: product.IMAGE, cache: 'force-cache'}}
          onProgress={() => <ActivityIndicator />}
          resizeMode="contain"
          style={styles.h100}
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
      <Container style={styles.priceDetails}>
        <Text>{product.PRICE}</Text>
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    minHeight: 210,
    minWidth: '50%',
    marginRight: 2,
    marginBottom: 2,
    padding: 8,
    borderRadius: 5,
    flexDirection: 'column',
  },
  details: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  priceDetails: {
    justifyContent: 'space-between',
    color: '#FF1696',
    borderColor: 'grey',
  },
  h100: {
    height: '100%',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF1696',
  },
  w100: {minWidth: '100%'},
  bookmark: {alignSelf: 'center', paddingLeft: 10},
});

export default PDPScreen;
