import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import AboutForm from "./AboutForm";
import { useDispatch } from "react-redux";
import { Form, edit } from "../redux/form";
import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem, GridRowModel } from "@mui/x-data-grid";

const DialogForm = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [dataDialog, setDataDialog] = useState({
    id: 0,
    name: "wojtek",
    age: "32",
    birthDate: "20/30/2000",
  });

  const handleClick = (row: GridRowModel) => {
    setOpen(!open);
    console.log(row);
  };

  const onSubmit = (data: Form) => {
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
