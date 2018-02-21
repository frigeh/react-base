export const check_credentials = (credentials) => ({
  type: 'CHECK_CREDENTIALS',
  credentials
});

export const logout = (credentials) => ({
  type: 'LOGOUT',
});