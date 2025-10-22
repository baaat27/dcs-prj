// amplify/data/resource.ts

import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Product: a
    .model({
      name: a.string().required(),
      price: a.integer(),
      description: a.string(),
      imageKey: a.string(),
      categories: a.hasMany('ProductCategory', 'productId'),
   //   cartItems: a.hasMany('CartItem', 'productId'),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Category: a
    .model({
      name: a.string().required(),
      products: a.hasMany('ProductCategory', 'categoryId'),
    })
    .authorization((allow) => [allow.publicApiKey()]),

  ProductCategory: a
    .model({
      productId: a.id().required(),
      categoryId: a.id().required(),
      product: a.belongsTo('Product', 'productId'),
      category: a.belongsTo('Category', 'categoryId'),
    })
    .authorization((allow) => [allow.publicApiKey()]),

   CartItem: a
    .model({
      quantity: a.integer().required(),
      // どの商品かを指し示すための関連を定義
      productId: a.id().required(),
     // product: a.belongsTo('Product', 'productId'),
    })
    .authorization((allow) => [allow.owner()]),

    
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});