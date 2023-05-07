import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { change } from "../redux/languages";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const text = useSelector((state: RootState) => state.languages.text);
  const dispatch = useDispatch();

  const handleChange = (e: SelectChangeEvent<any>) => {
    dispatch(change(e.target.value));
  };

  return (
    <header className="navbar">
      <nav>
        <NavLink to="/main">{text.main}</NavLink>
        <NavLink to="/view">{text.view}</NavLink>
      </nav>

      <Select onChange={(e) => handleChange(e)} value={text.name}>
        {Object.entries(text.languages).map(([name, arr]) => {
          return (
            <MenuItem value={name} key={arr[1]}>
              {arr[0]}
            </MenuItem>
          );
        })}
      </Select>
    </header>
  );
};

export default Navbar;
