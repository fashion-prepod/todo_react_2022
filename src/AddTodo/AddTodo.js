import React, { useState } from "react";
import { Box, TextInput, Button } from "grommet";
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux';
import {selectFilteredTodos} from '../store/todoSelectors';
import actionCreators, {addTodo} from '../store/actionCreators';


export function AddTodo() {
  const [value, setValue] = useState("");
  const {addTodo} = actionCreators;

  const filteredTodos = useSelector(selectFilteredTodos);

  return (
    <>
      <h1 align='center'>Todos ({filteredTodos.length})</h1>
      <Box
        width="500px"
        margin={"auto"}
        direction="row"
        align="center"
        pad="medium"
        gap="medium"
      >

        <TextInput
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          a11yTitle="2 Available Updates"
          label="Add"
          onClick={() => {
            addTodo(value);
            setValue("");
          }}
          badge={0}
        />
      </Box>
    </>
  );
}
