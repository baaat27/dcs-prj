/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $condition: ModelCategoriesConditionInput
    $input: CreateCategoriesInput!
  ) {
    createCategories(condition: $condition, input: $input) {
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
export const createProductCategories = /* GraphQL */ `
  mutation CreateProductCategories(
    $condition: ModelProductCategoriesConditionInput
    $input: CreateProductCategoriesInput!
  ) {
    createProductCategories(condition: $condition, input: $input) {
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
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $condition: ModelProductsConditionInput
    $input: CreateProductsInput!
  ) {
    createProducts(condition: $condition, input: $input) {
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
export const createTests = /* GraphQL */ `
  mutation CreateTests(
    $condition: ModelTestsConditionInput
    $input: CreateTestsInput!
  ) {
    createTests(condition: $condition, input: $input) {
      createdAt
      id
      test1
      updatedAt
      __typename
    }
  }
`;
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $condition: ModelCategoriesConditionInput
    $input: DeleteCategoriesInput!
  ) {
    deleteCategories(condition: $condition, input: $input) {
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
export const deleteProductCategories = /* GraphQL */ `
  mutation DeleteProductCategories(
    $condition: ModelProductCategoriesConditionInput
    $input: DeleteProductCategoriesInput!
  ) {
    deleteProductCategories(condition: $condition, input: $input) {
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
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $condition: ModelProductsConditionInput
    $input: DeleteProductsInput!
  ) {
    deleteProducts(condition: $condition, input: $input) {
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
export const deleteTests = /* GraphQL */ `
  mutation DeleteTests(
    $condition: ModelTestsConditionInput
    $input: DeleteTestsInput!
  ) {
    deleteTests(condition: $condition, input: $input) {
      createdAt
      id
      test1
      updatedAt
      __typename
    }
  }
`;
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $condition: ModelCategoriesConditionInput
    $input: UpdateCategoriesInput!
  ) {
    updateCategories(condition: $condition, input: $input) {
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
export const updateProductCategories = /* GraphQL */ `
  mutation UpdateProductCategories(
    $condition: ModelProductCategoriesConditionInput
    $input: UpdateProductCategoriesInput!
  ) {
    updateProductCategories(condition: $condition, input: $input) {
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
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $condition: ModelProductsConditionInput
    $input: UpdateProductsInput!
  ) {
    updateProducts(condition: $condition, input: $input) {
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
export const updateTests = /* GraphQL */ `
  mutation UpdateTests(
    $condition: ModelTestsConditionInput
    $input: UpdateTestsInput!
  ) {
    updateTests(condition: $condition, input: $input) {
      createdAt
      id
      test1
      updatedAt
      __typename
    }
  }
`;
