import { db } from "@arangodb";

import { ICollection } from "../interfaces";

const {
  COLLECTIONS: { auth }
} = module.context.dependencies.shared;

const collections: ICollection = auth.documents;

Object.values(collections).forEach(collection => {
  if (!db._collection(collection)) {
    db._createDocumentCollection(collection);
  } else if (module.context.isProduction) {
    console.debug(
      `collection ${collection} already exists. Leaving it untouched.`
    );
  }
});

const users = module.context.collection("users");

users.ensureIndex({
  unique: true,
  type: "hash",
  fields: ["username"]
});
