import jwt from 'jsonwebtoken';

const TOKEN_KEY = '@yTjy57Lj8E/UC9vpLBIv5cMXxWY1xj27ub/D6GavBOw=';

export const getToken = (): string => localStorage.getItem(TOKEN_KEY);
export const login = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};
export const decodeToken = (token: string) => jwt.decode(token);
