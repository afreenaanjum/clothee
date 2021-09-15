import React, {useCallback} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import ProductCard from './ProductCard';
import dummyData from '../data/ecommerce_data.json';
import Container from './Container';
import SearchBar from '../components/SearchBar';
import {useState} from 'react';
import {IProduct} from '../interfaces/interface';
import {debounce} from '../utils/Debounce';
import {useEffect} from 'react';

const ProductList = () => {
  const [filteredData, setFilteredData] = useState<Array<IProduct>>(dummyData);
  const [query, setQueryValue] = useState('');

  const filtering = (val: string | '') => {
    const filter: IProduct[] = dummyData?.filter(product => {
      return product?.NAME?.toLowerCase().includes(val?.toLowerCase());
    });
    setFilteredData(filter);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleQuery = useCallback(
    debounce((val: string) => filtering(val), 500),
    [],
  );

  const updateList = function (text: string) {
    setQueryValue(text);
  };

  useEffect(() => {
    if (query === '') {
      setFilteredData(dummyData);
    } else {
      throttleQuery(query);
    }
  }, [query, throttleQuery]);

  return (
    <Container>
      <SearchBar updateList={updateList} value={query} />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={2}
        data={filteredData}
        showsVerticalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={10}
        renderItem={({item}) => <ProductCard product={item} />}
        keyExtractor={item => item['PRODUCT ID'].toString()}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 20,
  },
});

export default ProductList;
