import React from "react";
import AboutForm from "../components/AboutForm";
import AboutTable from "../components/AboutTable";
import { useDispatch } from "react-redux";
import { Form, add } from "../redux/form";

const Main = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: Form) => {
    data.birthDate = data.birthDate.toLocaleDateString();
    dispatch(add(data));
  };

  return (
    <div>
      <AboutForm onSubmit={onSubmit} />
      <AboutTable />
    </div>
  );
};

export default Main;
