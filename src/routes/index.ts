import hello from "./hello";
import sessions from "./sessions";

import createRouter from "@arangodb/foxx/router";
const router = createRouter();

hello(router);
sessions(router);

export default router;
