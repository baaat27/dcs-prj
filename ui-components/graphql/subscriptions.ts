/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onCreateCategories(filter: $filter) {
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
export const onCreateProductCategories = /* GraphQL */ `
  subscription OnCreateProductCategories(
    $filter: ModelSubscriptionProductCategoriesFilterInput
    $owner: String
  ) {
    onCreateProductCategories(filter: $filter, owner: $owner) {
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
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onCreateProducts(filter: $filter) {
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
export const onCreateTests = /* GraphQL */ `
  subscription OnCreateTests($filter: ModelSubscriptionTestsFilterInput) {
    onCreateTests(filter: $filter) {
      createdAt
      id
      test1
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onDeleteCategories(filter: $filter) {
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
export const onDeleteProductCategories = /* GraphQL */ `
  subscription OnDeleteProductCategories(
    $filter: ModelSubscriptionProductCategoriesFilterInput
    $owner: String
  ) {
    onDeleteProductCategories(filter: $filter, owner: $owner) {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
    onDeleteProducts(filter: $filter) {
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
export const onDeleteTests = /* GraphQL */ `
  subscription OnDeleteTests($filter: ModelSubscriptionTestsFilterInput) {
    onDeleteTests(filter: $filter) {
      createdAt
      id
      test1
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onUpdateCategories(filter: $filter) {
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
export const onUpdateProductCategories = /* GraphQL */ `
  subscription OnUpdateProductCategories(
    $filter: ModelSubscriptionProductCategoriesFilterInput
    $owner: String
  ) {
    onUpdateProductCategories(filter: $filter, owner: $owner) {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onUpdateProducts(filter: $filter) {
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
export const onUpdateTests = /* GraphQL */ `
  subscription OnUpdateTests($filter: ModelSubscriptionTestsFilterInput) {
    onUpdateTests(filter: $filter) {
      createdAt
      id
      test1
      updatedAt
      __typename
    }
  }
`;
