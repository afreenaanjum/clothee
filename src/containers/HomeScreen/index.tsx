import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Center from '../../components/Center/Center';
import Container from '../../components/Container/Container';
import ProductList from '../../components/ProductList';
import SearchBar from '../../components/SearchBar';
import {IProduct} from '../../interfaces/interface';
import {debounce} from '../../utils/Debounce';

const HomeScreen = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [query, setQueryValue] = useState('');
  const [filteredData, setFilteredData] = useState<Array<IProduct>>(products);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.jsonbin.io/b/610ba3f2e1b0604017a6fbcc')
      .then(res => res.json())
      .then(res => {
        setProducts(res);
        setLoading(false);
      });
  }, []);

  const filtering = (searchVal: string, productList: IProduct[]) => {
    const newFilteredData: IProduct[] = productList?.filter(product =>
      product?.NAME?.toLowerCase().includes(searchVal?.toLowerCase()),
    );
    setFilteredData(newFilteredData);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleQuery = useCallback(
    debounce(
      (val: string, productList: IProduct[]) => filtering(val, productList),
      500,
    ),
    [],
  );

  useEffect(() => {
    if (query === '') {
      setFilteredData(products);
    } else {
      throttleQuery(query, products);
    }
  }, [products, query, throttleQuery]);

  const updateList = function (text: string) {
    setQueryValue(text);
  };

  return (
    <Container>
      <SearchBar updateList={updateList} value={query} />
      {isLoading && (
        <Center style={{}}>
          <ActivityIndicator />
        </Center>
      )}
      {!isLoading && <ProductList products={filteredData} />}
    </Container>
  );
};

export default HomeScreen;
