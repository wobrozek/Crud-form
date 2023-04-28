import React, { FC, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Form } from "../redux/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dayjs } from "dayjs";

interface FormProps {
  onSubmit: (data: Form) => void;
  defaultValue?: Form;
}

const AboutForm: FC<FormProps> = (props) => {
  const text = useSelector((state: RootState) => state.languages.text);

  function getMaxDate(): Date {
    return new Date();
  }

  function getMinDate(): Date {
    return new Date(1900, 1, 1);
  }

  const schema = yup.object().shape({
    name: yup
      .string()
      .typeError(text.formErrors.type)
      .required(text.formErrors.required),
    age: yup
      .number()
      .typeError(text.formErrors.type)
      .positive(text.formErrors.ageNegative)
      .integer(text.formErrors.type)
      .max(130, text.formErrors.ageLarge)
      .required(text.formErrors.required),
    about: yup
      .string()
      .typeError(text.formErrors.type)
      .max(250, text.formErrors.aboutMax),
    birthDate: yup
      .date()
      .typeError(text.formErrors.type)
      .max(getMaxDate(), text.formErrors.dateFuture)
      .min(getMinDate(), text.formErrors.dateToOld)
      .required(text.formErrors.required),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleDataChange = (date: Date) => {
    setValue("birthDate", date);
  };

  return (
    <form className="formAbout" onSubmit={handleSubmit(props.onSubmit)}>
      {/* specjal id to edit existing records  */}
      <TextField style={{ display: "none" }} {...register("id")}></TextField>

      <TextField
        error={!!errors.name}
        label={text.formName}
        defaultValue={props?.defaultValue?.name}
        {...register("name")}
        helperText={errors.name?.message?.toString()}
      ></TextField>
      <TextField
        {...register("age")}
        error={!!errors.age}
        label={text.formAge}
        defaultValue={props?.defaultValue?.age}
        type="number"
        helperText={errors.age?.message?.toString()}
      ></TextField>
      <TextField
        error={!!errors.about}
        label={text.formAbout}
        defaultValue={props?.defaultValue?.about}
        multiline
        rows={4}
        {...register("about")}
        helperText={errors.about?.message?.toString()}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={handleDataChange}
          format="DD/MM/YYYY"
          defaultValue={props?.defaultValue?.birthDate}
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
