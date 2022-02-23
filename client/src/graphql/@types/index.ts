import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type CreateProductInput = {
  description: Scalars['String'];
  img: Scalars['String'];
  price: Scalars['Float'];
  title: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  createUser: User;
  login: AuthPayload;
};


export type MutationCreateProductArgs = {
  data: CreateProductInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  img: Scalars['String'];
  price: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getAllProducts: Array<Product>;
  getAllUsers: Array<User>;
  getMe?: Maybe<User>;
  getProductById: Product;
  getUserById: User;
};


export type QueryGetProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = { __typename?: 'Query', getAllProducts: Array<{ __typename?: 'Product', id: string, title: string, description: string, price: number, img: string }> };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProductByIdQuery = { __typename?: 'Query', getProductById: { __typename?: 'Product', id: string, title: string, description: string, price: number, img: string } };


export const AllProductsDocument = gql`
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

export function useAllProductsQuery(options?: Omit<Urql.UseQueryArgs<AllProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<AllProductsQuery>({ query: AllProductsDocument, ...options });
};
export const ProductByIdDocument = gql`
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

export function useProductByIdQuery(options: Omit<Urql.UseQueryArgs<ProductByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<ProductByIdQuery>({ query: ProductByIdDocument, ...options });
};