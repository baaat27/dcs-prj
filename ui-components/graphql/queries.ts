/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
      createdAt
      id
      name
      products {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const getProductCategories = /* GraphQL */ `
  query GetProductCategories($id: ID!) {
    getProductCategories(id: $id) {
      category {
        createdAt
        id
        name
        updatedAt
        __typename
      }
      categoryId
      createdAt
      id
      owner
      product {
        createdAt
        description
        id
        imageKey
        name
        price
        updatedAt
        __typename
      }
      productId
      updatedAt
      __typename
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      categories {
        nextToken
        __typename
      }
      createdAt
      description
      id
      imageKey
      name
      price
      updatedAt
      __typename
    }
  }
`;
export const getTests = /* GraphQL */ `
  query GetTests($id: ID!) {
    getTests(id: $id) {
      createdAt
      id
      test1
      updatedAt
      __typename
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        name
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listProductCategories = /* GraphQL */ `
  query ListProductCategories(
    $filter: ModelProductCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProductCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        categoryId
        createdAt
        id
        owner
        productId
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        description
        id
        imageKey
        name
        price
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        test1
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
