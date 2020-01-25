import joi from "joi";
import createRouter from "@arangodb/foxx/router";

import { AuthRequest } from "../interfaces";
import * as SessionController from "../controllers/session";

export function sessions() {
  const router = createRouter();

  router
    .post("/login", (req: AuthRequest, res) => {
      const { username, password } = req.body;
      const success = SessionController.login(username, password, req);

      if (success) res.send({ success });
      else res.throw("unauthorized");
    })
    .body(
      joi
        .object({
          username: joi.string().required(),
          password: joi.string().required()
        })
        .required(),
      "Credentials"
    )
    .description("Logs a registered user in");

  router
    .post("/signup", function(req: AuthRequest, res) {
      try {
        const { username, password } = req.body;
        SessionController.signup(username, password, req);
        res.send({ success: true });
      } catch (e) {
        // Failed to save the user
        // We'll assume the uniqueness constraint has been violated
        res.throw("bad request", "Username already taken", e);
      }
    })
    .body(
      joi
        .object({
          username: joi.string().required(),
          password: joi.string().required()
        })
        .required(),
      "Credentials"
    )
    .description("Creates a new user and logs them in.");

  router
    .post("/logout", function(req: AuthRequest, res) {
      try {
        SessionController.logout(req);
      } catch (error) {
        console.debug(`No valid session was found: ${req.session}`);
      }

      res.send({ success: true });
    })
    .description("Logs the current user out.");

  router
    .get("/whoami", function(req: AuthRequest, res) {
      try {
        const username = SessionController.whoami(req);
        res.send({ username });
      } catch (e) {
        res.send({ username: null });
      }
    })
    .description("Returns the currently active username.");

  return router;
}
