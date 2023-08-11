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
import Spinner from "../ClientSite/Global/spinner/Spinner";
import useFetch from "../Componants/hooks/useFetch";
import axios from "axios";

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
  const { loading } = useFetch();
  const [headName, setheadName] = useState("Movies");
  const [Action, setAction] = useState("");
  const [value, setValue] = useState(0);
  const [StoreID, setStoreID] = useState();
  const [open, setOpen] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const [delte, setdelte] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [AddMovies, setAddMovies] = useState({
    original_title: "",
    id: "",
    poster_path: "",
    backdrop_path: "",
    runtime: "",
    vote_average: "",
    overview: "",
    release_date: "",
    original_language: "",
    genre_ids: [16, 28, 12, 10751],
    status: "Released",
    tagline: "Unite or fall.",
    director: "Johny Since",
    writer: "Lena Anderson",
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 878,
        name: "Science Fiction",
      },
    ],
  });
  const [TVSeries, setTVSeries] = useState({
    original_name: "",
    id: "",
    poster_path: "",
    backdrop_path: "",
    runtime: "",
    vote_average: "",
    overview: "",
    original_language: "",
    genre_ids: [10763],
    status: "Released",
    tagline: "Unite or fall.",
    director: "-",
    writer: "-",
    genres: [
      {
        id: 18,
        name: "Drama",
      },
    ],
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
  const DeleteData = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/product/${StoreID}`
      );
      console.log("Movie deleted successfully:", response.data);
      toast.success("Deleted Successfully");
      DeletePopUp();
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };
  const TV_DeleteData = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/tvproduct/${StoreID}`
      );
      console.log("Movie deleted successfully:", response.data);
      toast.success("Deleted Successfully");
      DeletePopUp();
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };
  const New_Movie_ADD = () => {
    if (
      AddMovies.original_title !== "" &&
      AddMovies.poster_path !== "" &&
      AddMovies.vote_average !== "" &&
      AddMovies.overview !== "" &&
      AddMovies.runtime !== "" &&
      AddMovies.backdrop_path !== "" &&
      AddMovies.release_date !== "" &&
      AddMovies.original_language !== "" &&
      AddMovies.id !== ""
    ) {
      axios
        .post("http://localhost:5000/products", AddMovies)
        .then((res) => {
          console.log("ADD request successful:", res.data);
        })
        .catch((error) => {
          console.error("Error making ADD request:", error);
        });
      toast.success("Movie Add successfully");
      handleClose();
      setAddMovies(
        AddMovies.original_title == "",
        AddMovies.poster_path == "",
        AddMovies.vote_average == "",
        AddMovies.id !== "",
        AddMovies.overview == "",
        AddMovies.runtime == "",
        AddMovies.backdrop_path == "",
        AddMovies.release_date == "",
        AddMovies.original_language == ""
      );
    } else {
      toast.warn("Please first enter all detail");
    }
  };
  const New_TV_ADD = () => {
    if (
      TVSeries.original_name !== "" &&
      TVSeries.poster_path !== "" &&
      TVSeries.vote_average !== "" &&
      TVSeries.overview !== "" &&
      TVSeries.runtime !== "" &&
      TVSeries.backdrop_path !== "" &&
      TVSeries.original_language !== "" &&
      TVSeries.id !== ""
    ) {
      axios
        .post("http://localhost:5000/tvproducts", TVSeries)
        .then((res) => {
          console.log("ADD request successful:", res.data);
        })
        .catch((error) => {
          console.error("Error making ADD request:", error);
        });
      toast.success("TV Show Add successfully");
      handleClose();
      setTVSeries(
        TVSeries.original_name == "",
        TVSeries.poster_path == "",
        TVSeries.vote_average == "",
        TVSeries.id !== "",
        TVSeries.overview == "",
        TVSeries.runtime == "",
        TVSeries.backdrop_path == "",
        TVSeries.original_language == ""
      );
    } else {
      toast.warn("Please first enter all detail");
    }
  };
  const Get_One = (id) => {
    setStoreID(id);
    axios
      .get(`http://localhost:5000/movie/${id}`)
      .then((res) => {
        console.log("get request successful:", res.data);
        setAddMovies({
          original_title: res.data.original_title,
          poster_path: res.data.poster_path,
          backdrop_path: res.data.backdrop_path,
          runtime: res.data.runtime,
          vote_average: res.data.vote_average,
          overview: res.data.overview,
          release_date: res.data.release_date,
          original_language: res.data.original_language,
          genre_ids: [16, 28, 12, 10751],
          status: "Released",
          tagline: "Unite or fall.",
          director: "Johny Since",
          writer: "Lena Anderson",
          genres: [
            {
              id: 28,
              name: "Action",
            },
            {
              id: 12,
              name: "Adventure",
            },
            {
              id: 878,
              name: "Science Fiction",
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error making get request:", error);
      });
  };
  const Get_TV = (id) => {
    setStoreID(id);
    axios
      .get(`http://localhost:5000/tv/${id}`)
      .then((res) => {
        console.log("get request successful:", res.data);
        setTVSeries({
          original_name: res.data.original_name,
          poster_path: res.data.poster_path,
          backdrop_path: res.data.backdrop_path,
          runtime: res.data.runtime,
          vote_average: res.data.vote_average,
          overview: res.data.overview,
          original_language: res.data.original_language,
          genre_ids: [10763],
          status: "Released",
          tagline: "Unite or fall.",
          director: "-",
          writer: "-",
          genres: [
            {
              id: 18,
              name: "Drama",
            },
          ],
        });
      })
      .catch((error) => {
        console.error("Error making get request:", error);
      });
  };
  const Update_Movie = () => {
    if (
      AddMovies.original_title !== "" &&
      AddMovies.poster_path !== "" &&
      AddMovies.vote_average !== "" &&
      AddMovies.overview !== "" &&
      AddMovies.runtime !== "" &&
      AddMovies.backdrop_path !== "" &&
      AddMovies.release_date !== "" &&
      AddMovies.original_language !== ""
    ) {
      axios
        .put(`http://localhost:5000/product/${StoreID}`, AddMovies)
        .then((res) => {
          console.log("Update request successful:", res.data);
        })
        .catch((error) => {
          console.error("Error making Update request:", error);
        });
      toast.success("Movie Update successfully");
      handleClose();
      setAddMovies(
        AddMovies.original_title == "",
        AddMovies.poster_path == "",
        AddMovies.vote_average == "",
        AddMovies.overview == "",
        AddMovies.runtime == "",
        AddMovies.backdrop_path == "",
        AddMovies.release_date == "",
        AddMovies.original_language == ""
      );
    } else {
      toast.warn("Please first enter all detail");
    }
  };
  const Update_TV = () => {
    if (
      TVSeries.original_name !== "" &&
      TVSeries.poster_path !== "" &&
      TVSeries.vote_average !== "" &&
      TVSeries.overview !== "" &&
      TVSeries.runtime !== "" &&
      TVSeries.backdrop_path !== "" &&
      TVSeries.original_language !== ""
    ) {
      axios
        .put(`http://localhost:5000/tvproduct/${StoreID}`, TVSeries)
        .then((res) => {
          console.log("Update request successful:", res.data);
        })
        .catch((error) => {
          console.error("Error making Update request:", error);
        });
      toast.success("TV Show Update successfully");
      handleClose();
      setTVSeries(
        TVSeries.original_name == "",
        TVSeries.poster_path == "",
        TVSeries.vote_average == "",
        TVSeries.overview == "",
        TVSeries.runtime == "",
        TVSeries.backdrop_path == "",
        TVSeries.original_language == ""
      );
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
  const TVinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTVSeries((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const PopUpContent = () => {
    if (Action == "Add") {
      if (headName === "Movies") {
        return (
          <>
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" ID"
                variant="standard"
                value={AddMovies.id}
                onChange={input}
                name="id"
                type="number"
              />

              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Name"
                variant="standard"
                value={AddMovies.original_title}
                onChange={input}
                name="original_title"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Poster Link"
                variant="standard"
                value={AddMovies.poster_path}
                onChange={input}
                name="poster_path"
              />
            </div>
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Background Link"
                variant="standard"
                value={AddMovies.backdrop_path}
                onChange={input}
                name="backdrop_path"
              />

              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Time"
                variant="standard"
                value={AddMovies.runtime}
                onChange={input}
                name="runtime"
                type="number"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Rating"
                variant="standard"
                value={AddMovies.vote_average}
                onChange={input}
                name="vote_average"
                type="number"
              />
            </div>
            <div className="d-flex my-1">
              <TextField
                label="Release Date"
                type="date"
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                variant="standard"
                value={AddMovies.release_date}
                onChange={input}
                name="release_date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label="Language"
                variant="standard"
                value={AddMovies.original_language}
                onChange={input}
                name="original_language"
              />
            </div>
            <div className="mt-3">
              <TextField
                sx={{ mx: "2%", width: "96%" }}
                id="standard-multiline-static"
                label=" Description"
                multiline
                rows={4}
                variant="standard"
                value={AddMovies.overview}
                onChange={input}
                name="overview"
              />
            </div>
          </>
        );
      } else {
        return (
          <>
            {" "}
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" ID"
                variant="standard"
                value={TVSeries.id}
                onChange={TVinput}
                name="id"
                type="number"
              />

              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Name"
                variant="standard"
                value={TVSeries.original_name}
                onChange={TVinput}
                name="original_name"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Poster Link"
                variant="standard"
                value={TVSeries.poster_path}
                onChange={TVinput}
                name="poster_path"
              />
            </div>
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label=" Background Link"
                variant="standard"
                value={TVSeries.backdrop_path}
                onChange={TVinput}
                name="backdrop_path"
              />

              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label=" Time"
                variant="standard"
                value={TVSeries.runtime}
                onChange={TVinput}
                name="runtime"
                type="number"
              />
            </div>
            <div className="d-flex my-1">
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label=" Rating"
                variant="standard"
                value={TVSeries.vote_average}
                onChange={TVinput}
                name="vote_average"
                type="number"
              />
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label="Language"
                variant="standard"
                value={TVSeries.original_language}
                onChange={TVinput}
                name="original_language"
              />
            </div>
            <div className="mt-3">
              <TextField
                sx={{ mx: "2%", width: "96%" }}
                id="standard-multiline-static"
                label=" Description"
                multiline
                rows={4}
                variant="standard"
                value={TVSeries.overview}
                onChange={TVinput}
                name="overview"
              />
            </div>
          </>
        );
      }
    } else if (Action == "Edit") {
      if (headName === "Movies") {
        return (
          <>
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Name"
                variant="standard"
                value={AddMovies.original_title}
                onChange={input}
                name="original_title"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Poster Link"
                variant="standard"
                value={AddMovies.poster_path}
                onChange={input}
                name="poster_path"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Background Link"
                variant="standard"
                value={AddMovies.backdrop_path}
                onChange={input}
                name="backdrop_path"
              />
            </div>
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label=" Time"
                variant="standard"
                value={AddMovies.runtime}
                onChange={input}
                name="runtime"
                type="number"
              />
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label=" Rating"
                variant="standard"
                value={AddMovies.vote_average}
                onChange={input}
                name="vote_average"
                type="number"
              />
            </div>
            <div className="d-flex my-1">
              <TextField
                label="Release Date"
                type="date"
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                variant="standard"
                value={AddMovies.release_date}
                onChange={input}
                name="release_date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label="Language"
                variant="standard"
                value={AddMovies.original_language}
                onChange={input}
                name="original_language"
              />
            </div>
            <div className="mt-3">
              <TextField
                sx={{ mx: "2%", width: "96%" }}
                id="standard-multiline-static"
                label=" Description"
                multiline
                rows={4}
                variant="standard"
                value={AddMovies.overview}
                onChange={input}
                name="overview"
              />
            </div>
          </>
        );
      } else {
        return (
          <>
            {" "}
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Name"
                variant="standard"
                value={TVSeries.original_name}
                onChange={TVinput}
                name="original_name"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Poster Link"
                variant="standard"
                value={TVSeries.poster_path}
                onChange={TVinput}
                name="poster_path"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Background Link"
                variant="standard"
                value={TVSeries.backdrop_path}
                onChange={TVinput}
                name="backdrop_path"
              />
            </div>
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Time"
                variant="standard"
                value={TVSeries.runtime}
                onChange={TVinput}
                name="runtime"
                type="number"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Rating"
                variant="standard"
                value={TVSeries.vote_average}
                onChange={TVinput}
                name="vote_average"
                type="number"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label="Language"
                variant="standard"
                value={TVSeries.original_language}
                onChange={TVinput}
                name="original_language"
              />
            </div>
            <div className="mt-3">
              <TextField
                sx={{ mx: "2%", width: "96%" }}
                id="standard-multiline-static"
                label=" Description"
                multiline
                rows={4}
                variant="standard"
                value={TVSeries.overview}
                onChange={TVinput}
                name="overview"
              />
            </div>
          </>
        );
      }
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
            onClick={() => {
              if (headName === "Movies") {
                New_Movie_ADD();
              } else if (headName === "TV Shows") {
                New_TV_ADD();
              }
            }}
          >
            Save
          </Button>
        </>
      );
    } else if (Action == "Edit") {
      return (
        <>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              if (headName === "Movies") {
                Update_Movie();
              } else if (headName === "TV Shows") {
                Update_TV();
              }
            }}
          >
            Update
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
      name: "Name",
      selector: (row) => row.original_title,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Release Date",
      selector: (row) => row.release_date,
    },
    {
      name: "Director",
      selector: (row) => row.director,
    },
    {
      name: "Language",
      selector: (row) => row.original_language,
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
                Get_One(row.id);
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
                Get_One(row.id);
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

  const columns_TV = [
    {
      name: "No",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.original_name,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Runtime",
      selector: (row) => row.runtime,
    },
    {
      name: "Rating",
      selector: (row) => row.vote_average,
    },
    {
      name: "Language",
      selector: (row) => row.original_language,
    },

    {
      name: "Action",
      selector: (row) => {
        return (
          <div className="actionButtonGroup">
            <Button
              size="small"
              className="btn-edit"
              onClick={() => {
                setAction("Edit");
                Get_TV(row.id);
                handleClickOpen();
              }}
            >
              <DrawIcon />
            </Button>
            <Button
              size="small"
              className="btn-closee"
              onClick={() => {
                setAction("Delete");
                Get_TV(row.id);
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
  return (
    <div>
      <Topbar />
      <ToastContainer />
      {!loading ? (
        <>
          <div className="app-content--inner container">
            <div className="app-content--inner__wrapper mh-100-vh">
              <div style={{ opacity: 1 }}></div>
              <Paper
                elevation={2}
                style={{
                  borderRadius: "10px",
                  display: "flex",
                  marginTop: "25px",
                }}
                className="pending-all-15px"
              >
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Search
                  </InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
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
                        label="TV Shows"
                        {...a11yProps(1)}
                        className="pading_tabs"
                        onClick={() => {
                          setheadName("TV Shows");
                        }}
                      />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <CommanTbl
                      url={"discover/movie"}
                      column={columns}
                      headName={headName}
                      handleClickOpen={() => {
                        handleClickOpen();
                        setAction("Add");
                      }}
                      open={open}
                      name="original_title"
                      delte={delte}
                      searchQuery={searchQuery}
                    />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <CommanTbl
                      url={"discover/tv"}
                      name="original_name"
                      column={columns_TV}
                      headName={headName}
                      handleClickOpen={() => {
                        handleClickOpen();
                        setAction("Add");
                      }}
                      open={open}
                      searchQuery={searchQuery}
                      delte={delte}
                    />
                  </CustomTabPanel>
                </Box>
              </Paper>
            </div>
          </div>
          <div class="sticky-button navigation_button">
            <Fab variant="extended" href="/AppClient" target="_blank">
              <NavigationIcon sx={{ mr: 1 }} />
              Visit Client Side
            </Fab>
          </div>
        </>
      ) : (
        <Spinner />
      )}

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
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              if (headName === "Movies") {
                DeleteData();
              } else if (headName === "TV Shows") {
                TV_DeleteData();
              }
            }}
          >
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
