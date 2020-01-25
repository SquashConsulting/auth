import sessionsMiddleware from "@arangodb/foxx/sessions";

import * as routes from "./routes";
import userSessionMiddleware from "./middlewares/userSession";

const sessions = sessionsMiddleware({
  storage: module.context.collection("sessions"),
  transport: "cookie"
});

module.context.use(sessions);
module.context.use(userSessionMiddleware);

module.context.use(routes.hello());
module.context.use(routes.sessions());
