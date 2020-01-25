import joi from "joi";
import createRouter from "@arangodb/foxx/router";

export function hello() {
  const router = createRouter();

  router
    .get("/hello", (_req, res) => {
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
