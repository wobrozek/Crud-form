import React from "react";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { add, Form } from "../redux/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AboutForm = () => {
  const text = useSelector((state: RootState) => state.languages.text);
  const dispatch = useDispatch();

  function getMaxDate(): Date {
    return new Date();
  }

  function getMinDate(): Date {
    return new Date(1900, 1, 1);
  }

  //   function getBirthdayByAge(value: Date, age: Number) {}

  const schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().positive().integer().max(130).required(),
    about: yup.string().max(250),
    birthDate: yup.date().max(getMaxDate()).min(getMinDate()).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Form) => {
    data.birthDate = data.birthDate.toISOString();
    dispatch(add(data));
  };

  const handleDataChange = (date: Date) => {
    setValue("birthDate", date);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        error={!!errors.name}
        label={text.formName}
        {...register("name")}
        helperText={errors.name?.message?.toString()}
      ></TextField>
      <TextField
        error={!!errors.age}
        label={text.formAge}
        type="number"
        {...register("age")}
        helperText={errors.age?.message?.toString()}
      ></TextField>
      <TextField
        error={!!errors.about}
        label={text.formAbout}
        multiline
        rows={4}
        {...register("about")}
        helperText={errors.about?.message?.toString()}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={handleDataChange}
          format="DD/MM/YYYY"
          slotProps={{
            textField: {
              helperText: errors.birthDate?.message?.toString(),
              error: !!errors.birthDate,
            },
          }}
        />
      </LocalizationProvider>
      <Button type="submit">{text.send}</Button>
    </form>
  );
};

export default AboutForm;
