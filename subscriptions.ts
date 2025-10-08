/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onCreateProductCategory = /* GraphQL */ `subscription OnCreateProductCategory(
  $filter: ModelSubscriptionProductCategoryFilterInput
) {
  onCreateProductCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductCategorySubscriptionVariables,
  APITypes.OnCreateProductCategorySubscription
>;
export const onCreateTest = /* GraphQL */ `subscription OnCreateTest($filter: ModelSubscriptionTestFilterInput) {
  onCreateTest(filter: $filter) {
    createdAt
    id
    test1
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTestSubscriptionVariables,
  APITypes.OnCreateTestSubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onDeleteProductCategory = /* GraphQL */ `subscription OnDeleteProductCategory(
  $filter: ModelSubscriptionProductCategoryFilterInput
) {
  onDeleteProductCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductCategorySubscriptionVariables,
  APITypes.OnDeleteProductCategorySubscription
>;
export const onDeleteTest = /* GraphQL */ `subscription OnDeleteTest($filter: ModelSubscriptionTestFilterInput) {
  onDeleteTest(filter: $filter) {
    createdAt
    id
    test1
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTestSubscriptionVariables,
  APITypes.OnDeleteTestSubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onUpdateProductCategory = /* GraphQL */ `subscription OnUpdateProductCategory(
  $filter: ModelSubscriptionProductCategoryFilterInput
) {
  onUpdateProductCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductCategorySubscriptionVariables,
  APITypes.OnUpdateProductCategorySubscription
>;
export const onUpdateTest = /* GraphQL */ `subscription OnUpdateTest($filter: ModelSubscriptionTestFilterInput) {
  onUpdateTest(filter: $filter) {
    createdAt
    id
    test1
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTestSubscriptionVariables,
  APITypes.OnUpdateTestSubscription
>;
