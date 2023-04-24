import React, { useMemo, useState } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
} from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { remove } from "../redux/form";

const AboutTable = () => {
  const text = useSelector((state: RootState) => state.languages.text);
  const people = useSelector((state: RootState) => state.form.people);
  const [checked, setChecked] = useState<number[]>([]);

  const dispatch = useDispatch();

  const handleChangeSubmit = (items: number[]) => {
    // setChecked(items);
    console.log("hej");
  };

  const handleEdit = React.useCallback(
    (id: GridRowId) => () => {
      console.log(id);
    },
    []
  );

  const handleDelete = React.useCallback(
    (id: GridRowId) => () => {
      dispatch(remove(parseInt(id.toString())));
    },
    []
  );

  const handleDeleteChecked = (e: React.MouseEvent<HTMLElement>) => {};

  const columns = useMemo(
    () => [
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
      {
        field: "action",
        type: "actions",
        width: 200,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDelete(params.id)}
          />,
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            onClick={handleEdit(params.id)}
          />,
        ],
      },
    ],
    [handleDelete, handleEdit]
  );

  if (people.length !== 0) {
    return (
      <>
        <DataGrid
          rows={people}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnSelector
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          pageSizeOptions={[10, 20, 50]}
          onRowSelectionModelChange={handleChangeSubmit}
        />
        <Button variant="contained">{text.deleteChecked}</Button>
      </>
    );
  }
};

export default AboutTable;
