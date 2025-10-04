// amplify/data/resource.ts

import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Products: a
    .model({
      name: a.string().required(),
      price: a.integer(),
      description: a.string(),
      imageKey: a.string(),
      categories: a.hasMany('ProductCategories', 'productId'),
    })
    .authorization((allow) => [allow.publicApiKey()]), 
  tests: a
    .model({
    test1: a.string(),
    })
   .authorization((allow) => [allow.publicApiKey()]), 
  Categories: a
    .model({
      name: a.string().required(),
      products: a.hasMany('ProductCategories', 'categoryId'),
    })
    .authorization((allow) => [allow.publicApiKey()]), 

  ProductCategories: a
    .model({
      productId: a.id().required(),
      categoryId: a.id().required(),
      product: a.belongsTo('Products', 'productId'),
      category: a.belongsTo('Categories', 'categoryId'),
    })
    .authorization(allow => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});