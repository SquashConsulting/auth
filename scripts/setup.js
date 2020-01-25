const db = require("@arangodb").db;

const collections = ["users", "sessions"];

for (const collection of collections) {
  const qualifiedName = module.context.collectionName(collection);
  if (!db._collection(qualifiedName)) {
    db._createDocumentCollection(qualifiedName);
  } else if (module.context.isProduction) {
    console.debug(
      `collection ${qualifiedName} already exists. Leaving it untouched.`
    );
  }
}
