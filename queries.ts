/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const getProductCategory = /* GraphQL */ `query GetProductCategory($id: ID!) {
  getProductCategory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductCategoryQueryVariables,
  APITypes.GetProductCategoryQuery
>;
export const getTest = /* GraphQL */ `query GetTest($id: ID!) {
  getTest(id: $id) {
    createdAt
    id
    test1
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTestQueryVariables, APITypes.GetTestQuery>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
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
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const listProductCategories = /* GraphQL */ `query ListProductCategories(
  $filter: ModelProductCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listProductCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      categoryId
      createdAt
      id
      productId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductCategoriesQueryVariables,
  APITypes.ListProductCategoriesQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
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
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const listTests = /* GraphQL */ `query ListTests(
  $filter: ModelTestFilterInput
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
` as GeneratedQuery<APITypes.ListTestsQueryVariables, APITypes.ListTestsQuery>;
