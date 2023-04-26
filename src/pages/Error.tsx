import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Error = () => {
  const error = useSelector(
    (state: RootState) => state.languages.text.errorPage
  );

  return <h1 className="error">{error}</h1>;
};

export default Error;
