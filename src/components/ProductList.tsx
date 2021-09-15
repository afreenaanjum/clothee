import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import ProductCard from './ProductCard';
import {IProductListProps, IProduct} from '../interfaces/interface';
import Center from './Center';

const ProductList: React.FC<IProductListProps> = ({
  products,
}: IProductListProps) => {
  function renderItem({item}: {item: IProduct}) {
    return <ProductCard product={item} />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.contentContainerStyle}
      numColumns={2}
      data={products}
      ListEmptyComponent={() => {
        return (
          <Center>
            <Text>NO ITEMS FOUND!!</Text>
          </Center>
        );
      }}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => item['PRODUCT ID'].toString()}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});

export default ProductList;
