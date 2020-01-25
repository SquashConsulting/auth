import joi from "joi";
import createRouter from "@arangodb/foxx/router";

import { AuthRequest } from "../interfaces";

export function hello() {
  const router = createRouter();

  router
    .get("/hello", (req: AuthRequest, res) => {
      if (!req.user) res.throw("unauthorized");

      res.send({
        result: "Hello World"
      });
    })
    .response(
      joi
        .object({
          result: joi.string().required()
        })
        .required(),
      "result"
    )
    .summary("Returns hello world")
    .description("Example route that sends hello world message");

  return router;
}
