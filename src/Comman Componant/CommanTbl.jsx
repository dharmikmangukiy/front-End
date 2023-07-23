import React from "react";
import DataTable from "react-data-table-component";
import Button from '@mui/material/Button';

function CommanTbl(prop) {
  return (
    <div>
        <div className="d-flex justify-content-end py-3">
        <Button variant="outlined" className="btn_decorate" onClick={prop.handleClickOpen}>
        ADD {prop.headName} 
      </Button>
        </div>
      <DataTable
      className="ok_header"
        columns={prop.column}
        data={prop.data}
        paginationServer
        highlightOnHover
        persistTableHead
        pointerOnHover
      />
    </div>
  );
}

export default CommanTbl;
