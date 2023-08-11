import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Topbar = () => {
  function handleClick() {
    localStorage.setItem("login", true);
    window.location.reload();
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const ProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="topBar_css container-fluid">
      <div className="d-flex justify-content-between align-items-center px-4">
        <div>
          <img
            src="public/Images/Netflix-Logo.png"
            alt="logo"
            width="150px"
            height="70px"
          />
        </div>
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton>
            <Brightness4Icon className="icons_white" />
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon className="icons_white" />
          </IconButton>

          <IconButton onClick={ProfileOpen}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEWqAAH9+/v///+mAACkAACsAAD9+Pjy3d357u779PT46+vEZGTpyMj78fHHa2vBXV27SUnow8PkvLzu09PJd3faoKC9T0/Mf3/jtrbRjIy2PDyvCgv14+Px1tbbqKiuEhO2MDHSkZKzKCm5OTrTj4+wHyC5Q0PMenrBYGHWmZmwGxvit7fZoqKuERG+U1Njkco2AAAD20lEQVR4nO3ba3eaTBSGYZjhqCIqiCdi1SQ2Jnnz/3/ei5qD4iQtcSu0va8P7VpZ7V7PZmA4ZMayAAAAAAAAAAAAAAAAAAAAAAAAAACNpl81I4V4DG3F45tQqSiZ92rsUf9I+76nVJDMM0s0h05zpZRdKP7q1NajngT7GMWfyu8KxnD7+/b2lD1y5GpXcRxDDcQKz/yDwrvikzpGUffLMRKpykmpclE7FqpdJcbkNMZA5Ejr0UllW/kSlatxA0OOtkhpQ2VbSV7mv0Wnphi+wIxgrGyrztU7LF+F+xwLgcpPpsp2dH7lapzQFEMtBY50eSJ9Lb06v3IlrjnG+PwO3dxcuieQuoqFOUb/ch2+CKSuYm2OITEfNGQMs4udpYb7/a70ta/DW3OMjUCHS+Ms3RIIXY25w7VA5Z6xQ5nnpQoc07mkAol3AONpevWJxrJiU4w7kQNtmMWu/0hjfgEIXJnSm3JpFd6LVK5mEZ7kaAsdaD04Lq28aS3vh7FXyiFzju4MD16ulfJv6/mMoXuHrzlK9D1cZ756E03k6lY29N5zJGvZ46yzod9qtfx5V/YbV9UY7miQb3MML/A5TDuWa9X9uXT3wdS1GpADAAAAAAAAAAAAQKM0YPvHJWmr+5zkSVp/i5dJoH/Mw/2v82vZNnAoS3vyTerp+HWDi62iR+nqlZLslnDkE1eyR617hztL6tgY8WFl77fwBHdi46h1NzncOWOrn3Xuwxqrt8U93lBkHPXjsqVKC6O6AnW/yzlYwqS8+blLxfSs3Vel/orr8NpLeY8iHS21U3an/f3bl7YexuXh2x24h1oXMJXWSyrVer53qifSjm6Pg5Ph2y2xW9V6s9Ddk+WSRabNtMqKJq3d6aSjDO1tz9C6tgm+czam4678p/R3uiweyR7jSSc3dlfUCWVmr/Po9GTV675JL+8vuyvLMT1Zbn/m6FV7Ms4D8+BtS0Sb+/r7s7ZPV0+fRdz+PB/Mh2m2mr1vYHZniyzdzAf+278wKp4iRrUukTzirDufJrXfF4sqLwqi8GPx6Kf/Y3dz7cTfmK8uSGcD76vIlRTDt1zUPb+c0otNINFjMbs8Ce9SF6N1u3/eQG7P5H67oe3tObNREn55hX3ZXmuQNuDm8Atar7p907PJL9u7mcfNb29P61nv+ebryfK4ORUORotGn5yntGPFmyTyPrsrfNxBQn8+Kh5k/6z2XhVdTtNNx29FqsSLWrnvd+Z36cOt9Yd2966I/99inb3E7e7WQ/ySZevb1aP7t38nBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Nf9D3KSJy2nKoSaAAAAAElFTkSuQmCC"
              alt="Avatar"
              class="avatar"
            />{" "}
            <span className="mx-2 username"> Dharmik</span>
          </IconButton>
        </Box>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEWqAAH9+/v///+mAACkAACsAAD9+Pjy3d357u779PT46+vEZGTpyMj78fHHa2vBXV27SUnow8PkvLzu09PJd3faoKC9T0/Mf3/jtrbRjIy2PDyvCgv14+Px1tbbqKiuEhO2MDHSkZKzKCm5OTrTj4+wHyC5Q0PMenrBYGHWmZmwGxvit7fZoqKuERG+U1Njkco2AAAD20lEQVR4nO3ba3eaTBSGYZjhqCIqiCdi1SQ2Jnnz/3/ei5qD4iQtcSu0va8P7VpZ7V7PZmA4ZMayAAAAAAAAAAAAAAAAAAAAAAAAAACNpl81I4V4DG3F45tQqSiZ92rsUf9I+76nVJDMM0s0h05zpZRdKP7q1NajngT7GMWfyu8KxnD7+/b2lD1y5GpXcRxDDcQKz/yDwrvikzpGUffLMRKpykmpclE7FqpdJcbkNMZA5Ejr0UllW/kSlatxA0OOtkhpQ2VbSV7mv0Wnphi+wIxgrGyrztU7LF+F+xwLgcpPpsp2dH7lapzQFEMtBY50eSJ9Lb06v3IlrjnG+PwO3dxcuieQuoqFOUb/ch2+CKSuYm2OITEfNGQMs4udpYb7/a70ta/DW3OMjUCHS+Ms3RIIXY25w7VA5Z6xQ5nnpQoc07mkAol3AONpevWJxrJiU4w7kQNtmMWu/0hjfgEIXJnSm3JpFd6LVK5mEZ7kaAsdaD04Lq28aS3vh7FXyiFzju4MD16ulfJv6/mMoXuHrzlK9D1cZ756E03k6lY29N5zJGvZ46yzod9qtfx5V/YbV9UY7miQb3MML/A5TDuWa9X9uXT3wdS1GpADAAAAAAAAAAAAQKM0YPvHJWmr+5zkSVp/i5dJoH/Mw/2v82vZNnAoS3vyTerp+HWDi62iR+nqlZLslnDkE1eyR617hztL6tgY8WFl77fwBHdi46h1NzncOWOrn3Xuwxqrt8U93lBkHPXjsqVKC6O6AnW/yzlYwqS8+blLxfSs3Vel/orr8NpLeY8iHS21U3an/f3bl7YexuXh2x24h1oXMJXWSyrVer53qifSjm6Pg5Ph2y2xW9V6s9Ddk+WSRabNtMqKJq3d6aSjDO1tz9C6tgm+czam4678p/R3uiweyR7jSSc3dlfUCWVmr/Po9GTV675JL+8vuyvLMT1Zbn/m6FV7Ms4D8+BtS0Sb+/r7s7ZPV0+fRdz+PB/Mh2m2mr1vYHZniyzdzAf+278wKp4iRrUukTzirDufJrXfF4sqLwqi8GPx6Kf/Y3dz7cTfmK8uSGcD76vIlRTDt1zUPb+c0otNINFjMbs8Ce9SF6N1u3/eQG7P5H67oe3tObNREn55hX3ZXmuQNuDm8Atar7p907PJL9u7mcfNb29P61nv+ebryfK4ORUORotGn5yntGPFmyTyPrsrfNxBQn8+Kh5k/6z2XhVdTtNNx29FqsSLWrnvd+Z36cOt9Yd2966I/99inb3E7e7WQ/ySZevb1aP7t38nBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Nf9D3KSJy2nKoSaAAAAAElFTkSuQmCC"
            alt="Avatar"
            class="avatar"
            style={{ height: "36px", width: "36px", marginRight: "10px" }}
          />{" "}
          Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClick();
            handleClose();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Topbar;
