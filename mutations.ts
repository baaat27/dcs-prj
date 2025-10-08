/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $condition: ModelCategoryConditionInput
  $input: CreateCategoryInput!
) {
  createCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $condition: ModelProductConditionInput
  $input: CreateProductInput!
) {
  createProduct(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const createProductCategory = /* GraphQL */ `mutation CreateProductCategory(
  $condition: ModelProductCategoryConditionInput
  $input: CreateProductCategoryInput!
) {
  createProductCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateProductCategoryMutationVariables,
  APITypes.CreateProductCategoryMutation
>;
export const createTest = /* GraphQL */ `mutation CreateTest(
  $condition: ModelTestConditionInput
  $input: CreateTestInput!
) {
  createTest(condition: $condition, input: $input) {
    createdAt
    id
    test1
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTestMutationVariables,
  APITypes.CreateTestMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $condition: ModelCategoryConditionInput
  $input: DeleteCategoryInput!
) {
  deleteCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $condition: ModelProductConditionInput
  $input: DeleteProductInput!
) {
  deleteProduct(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const deleteProductCategory = /* GraphQL */ `mutation DeleteProductCategory(
  $condition: ModelProductCategoryConditionInput
  $input: DeleteProductCategoryInput!
) {
  deleteProductCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteProductCategoryMutationVariables,
  APITypes.DeleteProductCategoryMutation
>;
export const deleteTest = /* GraphQL */ `mutation DeleteTest(
  $condition: ModelTestConditionInput
  $input: DeleteTestInput!
) {
  deleteTest(condition: $condition, input: $input) {
    createdAt
    id
    test1
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTestMutationVariables,
  APITypes.DeleteTestMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $condition: ModelCategoryConditionInput
  $input: UpdateCategoryInput!
) {
  updateCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $condition: ModelProductConditionInput
  $input: UpdateProductInput!
) {
  updateProduct(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const updateProductCategory = /* GraphQL */ `mutation UpdateProductCategory(
  $condition: ModelProductCategoryConditionInput
  $input: UpdateProductCategoryInput!
) {
  updateProductCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateProductCategoryMutationVariables,
  APITypes.UpdateProductCategoryMutation
>;
export const updateTest = /* GraphQL */ `mutation UpdateTest(
  $condition: ModelTestConditionInput
  $input: UpdateTestInput!
) {
  updateTest(condition: $condition, input: $input) {
    createdAt
    id
    test1
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTestMutationVariables,
  APITypes.UpdateTestMutation
>;
