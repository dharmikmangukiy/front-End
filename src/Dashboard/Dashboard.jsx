import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CommanTbl from "../Comman Componant/CommanTbl";
import Button from "@mui/material/Button";
import DrawIcon from "@mui/icons-material/Draw";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from "@mui/icons-material/Search";
import Slide from "@mui/material/Slide";
import Topbar from "../Topbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Dashboard() {
  const [headName, setheadName] = useState("Movies");
  const [Action, setAction] = useState("");
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const [delte, setdelte] = React.useState(false);
  const [AddMovies, setAddMovies] = useState({
    m_name: "",
    m_photo_link: "",
    m_time: "",
    m_rating: "",
    m_description: "",
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const DeletePopUp = () => {
    setdelte(false);
  };
  const DeletePopUpopen = () => {
    setdelte(true);
  };
  const DeleteData=()=>{
    toast.success("Deleted Successfully")
    DeletePopUp()
  }

  const New_Movie_ADD = (e) => {
    e.preventDefault();
    if (
      AddMovies.m_name !== "" &&
      AddMovies.m_photo_link !== "" &&
      AddMovies.m_rating !== "" &&
      AddMovies.m_description !== "" &&
      AddMovies.m_time !== ""
    ) {
      toast.success("Movie Add successfully");
      handleClose();
    } else {
      toast.warn("Please first enter all detail");
    }
  };

  const input = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAddMovies((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  console.log(AddMovies);
  const PopUpContent = () => {
    if (Action == "Add") {
      return (
        <>
          <div className="d-flex ">
            <TextField
              sx={{ mx: "2%", width: "300px" }}
              id="standard-basic"
              label="Movie Name"
              variant="standard"
              value={AddMovies.m_name}
              onChange={input}
              name="m_name"
            />
            <TextField
              sx={{ mx: "2%", width: "300px" }}
              id="standard-basic"
              label="Movie Photo Link"
              variant="standard"
              value={AddMovies.m_photo_link}
              onChange={input}
              name="m_photo_link"
            />
          </div>
          <div className="d-flex my-1">
            <TextField
              sx={{ mx: "2%", width: "300px" }}
              id="standard-basic"
              label="Movie Time"
              variant="standard"
              value={AddMovies.m_time}
              onChange={input}
              name="m_time"
            />
            <TextField
              sx={{ mx: "2%", width: "300px" }}
              id="standard-basic"
              label="Movie Rating"
              variant="standard"
              value={AddMovies.m_rating}
              onChange={input}
              name="m_rating"
            />
          </div>
          <div className="mt-3">
            <TextField
              sx={{ mx: "2%", width: "96%" }}
              id="standard-multiline-static"
              label="Movie Description"
              multiline
              rows={4}
              variant="standard"
              value={AddMovies.m_description}
              onChange={input}
              name="m_description"
            />
          </div>
        </>
      );
    } else if (Action == "Edit") {
      return (
        <>
          <div className="d-flex ">
            <TextField
              sx={{ mx: "2%", width: "300px" }}
              id="standard-basic"
              label="Movie Name"
              variant="standard"
            />
            <TextField
              sx={{ mx: "2%", width: "300px" }}
              id="standard-basic"
              label="Movie Photo Link"
              variant="standard"
            />
          </div>
          <div className="d-flex my-1">
            <TextField
              sx={{ mx: "2%", width: "300px" }}
              id="standard-basic"
              label="Movie Time"
              variant="standard"
            />
            <TextField
              sx={{ mx: "2%", width: "300px" }}
              id="standard-basic"
              label="Movie Rating"
              variant="standard"
            />
          </div>
          <div className="mt-3">
            <TextField
              sx={{ mx: "2%", width: "96%" }}
              id="standard-multiline-static"
              label="Movie Description"
              multiline
              rows={4}
              variant="standard"
            />
          </div>
        </>
      );
    } else if (Action == "Delete") {
      return (
        <>
          <h3>Are you sure?</h3>
          <p>Do you want to Unlink Client?</p>
        </>
      );
    }
  };

  const PopUpAction = () => {
    if (Action == "Add") {
      return (
        <>
          <Button
            variant="outlined"
            color="success"
            onClick={(e) => New_Movie_ADD(e)}
          >
            Save
          </Button>
        </>
      );
    } else if (Action == "Edit") {
      return (
        <>
          <Button variant="outlined" color="success">
            Save
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
        </>
      );
    }
  };
  const columns = [
    {
      name: "No",
      selector: (row) => row.id,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },

    {
      name: "Action",
      selector: (row) => {
        return (
          <div className="actionButtonGroup">
            <Button
              size="small"
              className="btn-edit"
              // onClick={(event) => editGroup(row)}
              // {...row}
              onClick={() => {
                setAction("Edit");
                handleClickOpen();
              }}
            >
              <DrawIcon />
            </Button>
            <Button
              size="small"
              className="btn-closee"
              // onClick={(event) => editGroup(row)}
              // {...row}
              onClick={() => {
                setAction("Delete");
                DeletePopUpopen();
              }}
            >
              <DeleteForeverIcon />
            </Button>
          </div>
        );
      },
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];
  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <div>
      <Topbar />
      <ToastContainer />
      <div className="app-content--inner container">
        <div className="app-content--inner__wrapper mh-100-vh">
          <div style={{ opacity: 1 }}></div>
          <Paper
            elevation={2}
            style={{ borderRadius: "10px", display: "flex", marginTop: "25px" }}
            className="pending-all-15px"
          >
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Search
              </InputLabel>
              <Input id="standard-adornment-amount" />
            </FormControl>
            <Button
              variant="outlined"
              color="error"
              style={{ height: "35px", marginTop: "22px" }}
            >
              <SearchIcon />
            </Button>
          </Paper>
          <p className="main-heading">{headName}</p>

          <Paper
            elevation={2}
            style={{ borderRadius: "10px" }}
            className="pending-all-15px"
          >
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="center_tabs"
                >
                  <Tab
                    label="Movies"
                    {...a11yProps(0)}
                    className="pading_tabs"
                    onClick={() => {
                      setheadName("Movies");
                    }}
                  />
                  <Tab
                    label="Web series"
                    {...a11yProps(1)}
                    className="pading_tabs"
                    onClick={() => {
                      setheadName("Web Series");
                    }}
                  />
                  <Tab
                    label="TV shows"
                    {...a11yProps(2)}
                    className="pading_tabs"
                    onClick={() => {
                      setheadName("TV Shows");
                    }}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <CommanTbl
                  column={columns}
                  sort="1"
                  data={data}
                  headName={headName}
                  handleClickOpen={() => {
                    handleClickOpen();
                    setAction("Add");
                  }}
                />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                {/* <CommanTbl /> */}
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                {/* <CommanTbl /> */}
              </CustomTabPanel>
            </Box>
          </Paper>
        </div>
      </div>
      <div className="d-flex justify-content-end mx-5 navigation_button">
        <Fab variant="extended" href="/AppClient" target="_blank">
          <NavigationIcon sx={{ mr: 1 }} />
          Visit Client Side
        </Fab>
      </div>

      <Dialog
        open={delte}
        TransitionComponent={Transition}
        keepMounted
        onClose={DeletePopUp}
        aria-describedby="alert-dialog-slide-description"
        className="del_popup"
      >
        <DialogTitle>{"Are You Sure ?"}</DialogTitle>
        <DialogContent>
          <Button variant="outlined" onClick={DeletePopUp}>
            Cancel
          </Button>
          <Button variant="outlined" color="error" onClick={DeleteData}>
            Delete
          </Button>
        </DialogContent>
      </Dialog>

      <BootstrapDialog
        maxWidth={maxWidth}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {Action} {headName}
        </BootstrapDialogTitle>
        <DialogContent dividers>{PopUpContent()}</DialogContent>
        <DialogActions>{PopUpAction()}</DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default Dashboard;
