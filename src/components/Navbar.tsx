import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Select, MenuItem } from "@mui/material";
import { change } from "../redux/languages";

const Navbar = () => {
  const text = useSelector((state: RootState) => state.languages.text);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    dispatch(change(e.target.value));
    console.log(e.target.value);
  };

  return (
    <div className="navbar">
      <div>{text.main}</div>
      <div>{text.view}</div>

      <Select onChange={(e) => handleChange(e)} value={text.name}>
        {Object.entries(text.languages).map(([name, arr]) => {
          return (
            <MenuItem value={name} key={arr[1]}>
              {arr[0]}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};

export default Navbar;
