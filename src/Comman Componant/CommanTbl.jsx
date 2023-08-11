import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Button from "@mui/material/Button";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Spinner from "../ClientSite/Global/spinner/Spinner";
import useFetch from "../Componants/hooks/useFetch";

function CommanTbl(prop) {
  const { loading } = useFetch();
  const [DashData, setDashData] = useState([]);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/${prop.url}`).then((res) => {
      if (res.data.message == "error") {
        Navigate("/Dashboard");
      } else {
        setDashData(res.data);
        setNewData(res.data);
        console.log(res.data);
      }
    });
  }, [prop.open, prop.delte]);
  useEffect(() => {
    console.log("fsdafsad", DashData);
    const matchingObjects = DashData.filter((obj) =>
      obj[prop.name]?.toLowerCase().includes(prop.searchQuery.toLowerCase())
    );
    console.log("nArray", matchingObjects);
    setNewData(matchingObjects);
  }, [prop.searchQuery]);

  return (
    <div>
      {!loading ? (
        <>
          <div className="d-flex justify-content-end py-3">
            <Button
              variant="outlined"
              className="btn_decorate"
              onClick={prop.handleClickOpen}
            >
              ADD {prop.headName}
            </Button>
          </div>
          <DataTable
            className="ok_header"
            columns={prop.column}
            data={newData}
            highlightOnHover
            persistTableHead
            pointerOnHover
            pagination
          />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default CommanTbl;
