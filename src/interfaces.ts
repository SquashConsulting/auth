interface AuthSessionStorage extends Foxx.SessionStorage {
  prune: () => void;
  save: (session?: Foxx.Session) => void;
  clear: (session: Foxx.Session) => void;
}

export interface AuthUser {
  _id?: string;
  _key?: string;
  authData?: any;
  username?: string;
}

export interface AuthRequest extends Foxx.Request {
  user: AuthUser;
  sessionStorage: AuthSessionStorage;
}

export interface ICollection {
  [key: string]: string;
}
