import auth from "../util/auth";
import { AuthRequest, AuthUser } from "../interfaces";

const users = module.context.collection("users");

export const signup = (
  username: string,
  password: string,
  req: AuthRequest
): void => {
  const user: AuthUser = {
    username,
    authData: auth.create(password)
  };

  const meta = users.save(user);

  const userWithMeta: AuthUser = { ...user, ...meta };

  req.session.uid = userWithMeta._key;
  req.sessionStorage.save(req.session);
};

export const login = (
  username: string,
  password: string,
  req: AuthRequest
): boolean => {
  const user: AuthUser = users.firstExample({ username });
  const valid = auth.verify(user.authData, password);

  if (!valid) return false;

  req.session.uid = user._key;
  req.sessionStorage.save(req.session);

  return true;
};

export const logout = (req: AuthRequest): void => {
  req.sessionStorage.clear(req.session);
};

export const whoami = (req: AuthRequest): string => {
  const user = users.document(req.session.uid);
  return user.username;
};
