import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PDP from '../PDP';
import {IProduct} from '../../../interfaces/interface';

describe('Center widget', () => {
  it('renders correctly', () => {
    let product: IProduct = {
      'SERIAL NO': 68,
      NAME: 'Baggit Men Brown Textured Card Holder',
      CATEGORY: 'accessories',
      'DESCRIPTION & COLOR':
        'Baggit Men Brown Textured Card Holder,  Baggit, Wallets, Wallets, Accessories, Accessories for Men, Buy Baggit Men Brown Textured Card Holder Online in India, Buy Wallets at best price',
      FABRIC: 'Synthetic',
      IMAGE:
        'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6525475/2018/5/31/2fe78578-d217-44b0-9ada-d7cdd9f463cd1527762707750-Baggit-Men-Wallets-5631527762707516-1.jpg',
      SIZE: 'Height: 8.5 cm',
      PRICE: 540,
      'PRODUCT ID': 6525475,
      WEBSITE: 'Myntra',
      'PRODUCT URL':
        'https://www.myntra.com/wallets/baggit/baggit-men-brown-textured-card-holder/6525475/buy',
    };

    const tree = renderer.create(<PDP product={product} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //   it('renders correctly when no children', () => {
  //     const tree = renderer.create(<PDP product={null} />).toJSON();
  //     expect(tree).toMatchSnapshot();
  //   });
});
