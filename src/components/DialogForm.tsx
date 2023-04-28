import { Dialog, DialogContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import AboutForm from "./AboutForm";
import { useDispatch, useSelector } from "react-redux";
import { Form, edit } from "../redux/form";
import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem, GridRowModel } from "@mui/x-data-grid";
import { RootState } from "../redux/store";
import dayjs from "dayjs";

const DialogForm = (id) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [dataDialog, setDataDialog] = useState<Form>();
  const people = useSelector((state: RootState) => state.form.people);

  const handleClick = () => {
    setOpen(!open);
    let human = {
      ...people.filter((element) => {
        return element.id == id.id;
      }),
    };

    let humanCopy = { ...human[0] };

    // replace mm - dd and correct redux local date format
    let dateSplit = humanCopy.birthDate.split(".");

    humanCopy.birthDate = dayjs(
      `${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`
    );

    setDataDialog(humanCopy);
  };

  const onSubmit = (data: Form) => {
    setOpen(false);
    data.birthDate = data.birthDate.toLocaleDateString();
    data.id = dataDialog.id;
    dispatch(edit(data));
  };

  return (
    <>
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit"
        onClick={handleClick}
      />
      <Dialog onClose={handleClick} open={open}>
        <DialogContent>
          <AboutForm onSubmit={onSubmit} defaultValue={dataDialog}></AboutForm>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogForm;
