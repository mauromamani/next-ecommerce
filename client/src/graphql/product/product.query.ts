import { gql } from 'urql';

export const ALL_PRODUCTS = gql`
  query allProducts {
    getAllProducts {
      id
      title
      description
      price
      img
    }
  }
`;

export const PRODUCT_BY_ID = gql`
  query productById($id: ID!) {
    getProductById(id: $id) {
      id
      title
      description
      price
      img
    }
  }
`;
