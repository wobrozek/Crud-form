import React, { useMemo, useState } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridRowModel,
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
    setChecked(items);
  };

  const handleEdit = React.useCallback(
    (newRow: GridRowModel) => () => {
      console.log(newRow);
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
        editable: true,
      },
      {
        field: "age",
        headerName: text.formAge,
        width: 130,
        editable: true,
      },
      {
        field: "birthday",
        headerName: text.formBirthday,
        type: "date",
        width: 90,
        editable: true,
      },
      {
        field: "about",
        headerName: text.formAbout,
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        editable: true,
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
  return (
    <section
      className="aboutWrapper"
      style={people.length === 0 ? { display: "none" } : { display: "block" }}
    >
      <div className="aboutTable">
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
        />
        <Button variant="contained">{text.deleteChecked}</Button>
      </div>
    </section>
  );
};

export default AboutTable;
