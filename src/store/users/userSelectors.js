export const selectUsers = (state) => state.users.users;
export const selectLoading = (state) => state.users.isLoading;
export const selectFilterText = (state) => state.users.filterText;

export const selectFilteredUsersByTextFilter = ({
  users: { users, filterText },
}) =>
  users.filter(
    ({ first_name, last_name }) =>
      first_name.toLowerCase().includes(filterText.toLowerCase()) ||
      last_name.toLowerCase().includes(filterText.toLowerCase())
  );
