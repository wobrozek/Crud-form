import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { number } from "yup";

const AboutTable = () => {
  const text = useSelector((state: RootState) => state.languages.text);
  const people = useSelector((state: RootState) => state.form.people);
  const [checked, setChecked] = useState<number[]>([]);

  const dispatch = useDispatch();

  const handleChangeSubmit = (items: number[]) => {
    setChecked(items);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: text.formName,
      width: 130,
    },
    {
      field: "age",
      headerName: text.formAge,
      width: 130,
    },
    {
      field: "birthday",
      headerName: text.formBirthday,
      type: "date",
      width: 90,
    },
    {
      field: "about",
      headerName: text.formAbout,
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ];

  if (people.length !== 0) {
    return (
      <DataGrid
        rows={people}
        columns={columns}
        checkboxSelection
        disableColumnSelector
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 20, 50]}
        onRowSelectionModelChange={handleChangeSubmit}
      />
    );
  }
};

export default AboutTable;
