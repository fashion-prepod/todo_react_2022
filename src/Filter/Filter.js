import { Button } from "grommet";
import { FILTER_TYPE } from "../constants/filterConstants";
import {selectFilter} from '../store/todoSelectors';
import {useSelector, useDispatch} from 'react-redux';
import actionCreators from '../store/actionCreators';

export const Filter = () => {
  const currentFilter = useSelector(selectFilter);
  const {changeFilter} = actionCreators;


  return (
    <div>
      <Button
        label="DONE"
        primary={currentFilter === FILTER_TYPE.DONE}
        onClick={() => changeFilter(FILTER_TYPE.DONE)}
      />
      <Button
        label="UNDONE"
        primary={currentFilter === FILTER_TYPE.UNDONE}
        onClick={() => changeFilter(FILTER_TYPE.UNDONE)}
      />

      <Button
        label="ALL"
        primary={currentFilter === FILTER_TYPE.ALL}
        onClick={() => changeFilter(FILTER_TYPE.ALL)}
      />
    </div>
  );
};
