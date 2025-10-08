/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Category = {
  __typename: "Category",
  createdAt: string,
  id: string,
  name: string,
  products?: ModelProductCategoryConnection | null,
  updatedAt: string,
};

export type ModelProductCategoryConnection = {
  __typename: "ModelProductCategoryConnection",
  items:  Array<ProductCategory | null >,
  nextToken?: string | null,
};

export type ProductCategory = {
  __typename: "ProductCategory",
  category?: Category | null,
  categoryId: string,
  createdAt: string,
  id: string,
  product?: Product | null,
  productId: string,
  updatedAt: string,
};

export type Product = {
  __typename: "Product",
  categories?: ModelProductCategoryConnection | null,
  createdAt: string,
  description?: string | null,
  id: string,
  imageKey?: string | null,
  name: string,
  price?: number | null,
  updatedAt: string,
};

export type test = {
  __typename: "test",
  createdAt: string,
  id: string,
  test1?: string | null,
  updatedAt: string,
};

export type ModelCategoryFilterInput = {
  and?: Array< ModelCategoryFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelCategoryFilterInput | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelProductCategoryFilterInput = {
  and?: Array< ModelProductCategoryFilterInput | null > | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelProductCategoryFilterInput | null,
  or?: Array< ModelProductCategoryFilterInput | null > | null,
  productId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelProductFilterInput = {
  and?: Array< ModelProductFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  imageKey?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelProductFilterInput | null,
  or?: Array< ModelProductFilterInput | null > | null,
  price?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type ModelTestFilterInput = {
  and?: Array< ModelTestFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTestFilterInput | null,
  or?: Array< ModelTestFilterInput | null > | null,
  test1?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTestConnection = {
  __typename: "ModelTestConnection",
  items:  Array<test | null >,
  nextToken?: string | null,
};

export type ModelCategoryConditionInput = {
  and?: Array< ModelCategoryConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelCategoryConditionInput | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelProductConditionInput = {
  and?: Array< ModelProductConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelProductConditionInput | null,
  or?: Array< ModelProductConditionInput | null > | null,
  price?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateProductInput = {
  description?: string | null,
  id?: string | null,
  imageKey?: string | null,
  name: string,
  price?: number | null,
};

export type ModelProductCategoryConditionInput = {
  and?: Array< ModelProductCategoryConditionInput | null > | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelProductCategoryConditionInput | null,
  or?: Array< ModelProductCategoryConditionInput | null > | null,
  productId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateProductCategoryInput = {
  categoryId: string,
  id?: string | null,
  productId: string,
};

export type ModelTestConditionInput = {
  and?: Array< ModelTestConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTestConditionInput | null,
  or?: Array< ModelTestConditionInput | null > | null,
  test1?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTestInput = {
  id?: string | null,
  test1?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type DeleteProductInput = {
  id: string,
};

export type DeleteProductCategoryInput = {
  id: string,
};

export type DeleteTestInput = {
  id: string,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type UpdateProductInput = {
  description?: string | null,
  id: string,
  imageKey?: string | null,
  name?: string | null,
  price?: number | null,
};

export type UpdateProductCategoryInput = {
  categoryId?: string | null,
  id: string,
  productId?: string | null,
};

export type UpdateTestInput = {
  id: string,
  test1?: string | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
  price?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionProductCategoryFilterInput = {
  and?: Array< ModelSubscriptionProductCategoryFilterInput | null > | null,
  categoryId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionProductCategoryFilterInput | null > | null,
  productId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTestFilterInput = {
  and?: Array< ModelSubscriptionTestFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTestFilterInput | null > | null,
  test1?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    categories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    imageKey?: string | null,
    name: string,
    price?: number | null,
    updatedAt: string,
  } | null,
};

export type GetProductCategoryQueryVariables = {
  id: string,
};

export type GetProductCategoryQuery = {
  getProductCategory?:  {
    __typename: "ProductCategory",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    product?:  {
      __typename: "Product",
      createdAt: string,
      description?: string | null,
      id: string,
      imageKey?: string | null,
      name: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    productId: string,
    updatedAt: string,
  } | null,
};

export type GetTestQueryVariables = {
  id: string,
};

export type GetTestQuery = {
  getTest?:  {
    __typename: "test",
    createdAt: string,
    id: string,
    test1?: string | null,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      createdAt: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductCategoriesQueryVariables = {
  filter?: ModelProductCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductCategoriesQuery = {
  listProductCategories?:  {
    __typename: "ModelProductCategoryConnection",
    items:  Array< {
      __typename: "ProductCategory",
      categoryId: string,
      createdAt: string,
      id: string,
      productId: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      createdAt: string,
      description?: string | null,
      id: string,
      imageKey?: string | null,
      name: string,
      price?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTestsQueryVariables = {
  filter?: ModelTestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestsQuery = {
  listTests?:  {
    __typename: "ModelTestConnection",
    items:  Array< {
      __typename: "test",
      createdAt: string,
      id: string,
      test1?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: CreateCategoryInput,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  condition?: ModelProductConditionInput | null,
  input: CreateProductInput,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    categories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    imageKey?: string | null,
    name: string,
    price?: number | null,
    updatedAt: string,
  } | null,
};

export type CreateProductCategoryMutationVariables = {
  condition?: ModelProductCategoryConditionInput | null,
  input: CreateProductCategoryInput,
};

export type CreateProductCategoryMutation = {
  createProductCategory?:  {
    __typename: "ProductCategory",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    product?:  {
      __typename: "Product",
      createdAt: string,
      description?: string | null,
      id: string,
      imageKey?: string | null,
      name: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    productId: string,
    updatedAt: string,
  } | null,
};

export type CreateTestMutationVariables = {
  condition?: ModelTestConditionInput | null,
  input: CreateTestInput,
};

export type CreateTestMutation = {
  createTest?:  {
    __typename: "test",
    createdAt: string,
    id: string,
    test1?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: DeleteCategoryInput,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  condition?: ModelProductConditionInput | null,
  input: DeleteProductInput,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    categories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    imageKey?: string | null,
    name: string,
    price?: number | null,
    updatedAt: string,
  } | null,
};

export type DeleteProductCategoryMutationVariables = {
  condition?: ModelProductCategoryConditionInput | null,
  input: DeleteProductCategoryInput,
};

export type DeleteProductCategoryMutation = {
  deleteProductCategory?:  {
    __typename: "ProductCategory",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    product?:  {
      __typename: "Product",
      createdAt: string,
      description?: string | null,
      id: string,
      imageKey?: string | null,
      name: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    productId: string,
    updatedAt: string,
  } | null,
};

export type DeleteTestMutationVariables = {
  condition?: ModelTestConditionInput | null,
  input: DeleteTestInput,
};

export type DeleteTestMutation = {
  deleteTest?:  {
    __typename: "test",
    createdAt: string,
    id: string,
    test1?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: UpdateCategoryInput,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  condition?: ModelProductConditionInput | null,
  input: UpdateProductInput,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    categories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    imageKey?: string | null,
    name: string,
    price?: number | null,
    updatedAt: string,
  } | null,
};

export type UpdateProductCategoryMutationVariables = {
  condition?: ModelProductCategoryConditionInput | null,
  input: UpdateProductCategoryInput,
};

export type UpdateProductCategoryMutation = {
  updateProductCategory?:  {
    __typename: "ProductCategory",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    product?:  {
      __typename: "Product",
      createdAt: string,
      description?: string | null,
      id: string,
      imageKey?: string | null,
      name: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    productId: string,
    updatedAt: string,
  } | null,
};

export type UpdateTestMutationVariables = {
  condition?: ModelTestConditionInput | null,
  input: UpdateTestInput,
};

export type UpdateTestMutation = {
  updateTest?:  {
    __typename: "test",
    createdAt: string,
    id: string,
    test1?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    categories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    imageKey?: string | null,
    name: string,
    price?: number | null,
    updatedAt: string,
  } | null,
};

export type OnCreateProductCategorySubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoryFilterInput | null,
};

export type OnCreateProductCategorySubscription = {
  onCreateProductCategory?:  {
    __typename: "ProductCategory",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    product?:  {
      __typename: "Product",
      createdAt: string,
      description?: string | null,
      id: string,
      imageKey?: string | null,
      name: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    productId: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTestSubscriptionVariables = {
  filter?: ModelSubscriptionTestFilterInput | null,
};

export type OnCreateTestSubscription = {
  onCreateTest?:  {
    __typename: "test",
    createdAt: string,
    id: string,
    test1?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    categories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    imageKey?: string | null,
    name: string,
    price?: number | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductCategorySubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoryFilterInput | null,
};

export type OnDeleteProductCategorySubscription = {
  onDeleteProductCategory?:  {
    __typename: "ProductCategory",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    product?:  {
      __typename: "Product",
      createdAt: string,
      description?: string | null,
      id: string,
      imageKey?: string | null,
      name: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    productId: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTestSubscriptionVariables = {
  filter?: ModelSubscriptionTestFilterInput | null,
};

export type OnDeleteTestSubscription = {
  onDeleteTest?:  {
    __typename: "test",
    createdAt: string,
    id: string,
    test1?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    createdAt: string,
    id: string,
    name: string,
    products?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    categories?:  {
      __typename: "ModelProductCategoryConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    description?: string | null,
    id: string,
    imageKey?: string | null,
    name: string,
    price?: number | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductCategorySubscriptionVariables = {
  filter?: ModelSubscriptionProductCategoryFilterInput | null,
};

export type OnUpdateProductCategorySubscription = {
  onUpdateProductCategory?:  {
    __typename: "ProductCategory",
    category?:  {
      __typename: "Category",
      createdAt: string,
      id: string,
      name: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    id: string,
    product?:  {
      __typename: "Product",
      createdAt: string,
      description?: string | null,
      id: string,
      imageKey?: string | null,
      name: string,
      price?: number | null,
      updatedAt: string,
    } | null,
    productId: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTestSubscriptionVariables = {
  filter?: ModelSubscriptionTestFilterInput | null,
};

export type OnUpdateTestSubscription = {
  onUpdateTest?:  {
    __typename: "test",
    createdAt: string,
    id: string,
    test1?: string | null,
    updatedAt: string,
  } | null,
};
