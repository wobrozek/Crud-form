import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import PersonBox from "../components/PersonBox";
import PersonGrid from "../components/PersonGrid";

const View = () => {
  return (
    <main className="view">
      <PersonGrid />
    </main>
  );
};

export default View;
