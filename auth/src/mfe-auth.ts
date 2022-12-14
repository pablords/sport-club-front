export const TOKEN_KEY = "@startSetup";
export const USER = "@user";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUserLocalStorage = () => localStorage.getItem(USER)

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const setUserLocalStorage = (user: string) => {
  localStorage.setItem(USER, user);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER);
};


export interface IAuth{
  isAuthenticated: () => Boolean
  getToken: () => string
  getUserLocalStorage: () => string
  setToken: (token: string) => void
  setUserLocalStorage: (user: string) => void 
  logout: () => void
}