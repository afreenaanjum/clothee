import React from 'react';
import Container from '../../components/Container';
import ProductList from '../../components/ProductList';
import {IProps} from '../../interfaces/interface';

const HomeScreen: React.FC<IProps> = () => {
  return (
    <Container>
      <ProductList />
    </Container>
  );
};

export default HomeScreen;
