import { AuthRequest } from "../interfaces";

const users = module.context.collection("users");

export default function(req: AuthRequest, _res, next) {
  if (req.session.uid) {
    try {
      req.user = users.document(req.session.uid);
    } catch (e) {
      req.sessionStorage.clear(req.session);
    }
  }

  next();
}
