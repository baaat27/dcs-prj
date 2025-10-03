import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { Product, ProductStackHistory } from 'aws-cdk-lib/aws-servicecatalog';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Products: a
    .model({
      owner:a.string(),
      name: a.string().required(),
      price:a.integer().required(),
      description: a.string(),
      stock: a.integer().default(0),
      imageKey: a.string(),
      categories: a.hasMany('ProductCategory', 'productId'),
    })
    .authorization(allow => [allow.guest()]),

    Category: a
    .model({
      // 'Products12'モデルへの参照 (どの商品か)
      name: a.string().required(),
      // こちらも同様に `hasMany` を使って関係を定義します。
      // 「一つのカテゴリは、多くの中間データ(ProductCategory)を持つ」という意味です。
      // 'categoryId' は、ProductCategoryモデル内でこのカテゴリを指し示すためのキーです。
      products: a.hasMany('ProductCategory', 'categoryId'),
    })
    .authorization((allow) => [allow.guest()]),

    ProductCategory: a
    .model({
      // 関連先のIDフィールドを明示的に定義します。
      productId: a.id().required(),
      categoryId: a.id().required(),
      // `belongsTo` を使って、各々がどの親モデルに属するかを定義します。
      products: a.belongsTo('Product', 'productId'),
      category: a.belongsTo('Category', 'categoryId'),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
