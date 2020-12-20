export const actions = {
  setUser: "[users] SET USER",
  clearUsers: "[users] CLEAR USERS",
};

export const setUser = (name: string) => ({
  type: actions.setUser,
  payload: name,
});

export const clearUsers = () => ({
  type: actions.clearUsers,
});
