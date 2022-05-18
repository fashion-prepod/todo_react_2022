import { useEffect, useState } from "react";
import { User } from "../User/User";
import {
  selectFilteredUsersByTextFilter,
  selectLoading,
} from "../store/users/userSelectors";
import { useSelector } from "react-redux";
import actions from "../store/users/actionCreator";

export const UserList = () => {
  const users = useSelector(selectFilteredUsersByTextFilter);
  const isLoading = useSelector(selectLoading);
  const { getUsers } = actions;

  useEffect(() => {
    if (!users.length) {
      getUsers();
    }
  }, []);

  return (
    <div>
      {!isLoading ? (
        users.map(({ id, last_name, first_name }) => (
          <User key={id} lastName={last_name} firstName={first_name} />
        ))
      ) : (
        <div> loading... </div>
      )}
    </div>
  );
};
