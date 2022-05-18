import { useSelector } from "react-redux";
import { selectFilterText } from "../store/users/userSelectors";
import actions from "../store/users/actionCreator";

export const UserFilter = () => {
  const filterText = useSelector(selectFilterText);
    const {changeFilter} = actions;

  const changeHandler = ({ target: { value } }) => {
    changeFilter(value);
  };

  return (
    <div>
      <input
        onChange={changeHandler}
        type="text"
        placeholder="type here"
        value={filterText}
      />
    </div>
  );
};
