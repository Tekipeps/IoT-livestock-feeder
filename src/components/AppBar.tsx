import React from "react";
import Constants from "expo-constants";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  LocalDrinkRounded as LocalDrinkRoundedIcon,
} from "@material-ui/icons";
import { View } from "react-native";
import { Page } from "../../types";
import { useHistory } from "react-router-native";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: Constants.statusBarHeight,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function MenuAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [pageName, setPageName] = React.useState<Page>("Home");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (pageTo: Page) => {
    setPageName(pageTo);
    if (pageTo === "Home") {
      history.push("/");
    } else {
      history.push(`/${pageTo.toLowerCase()}`);
    }
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {pageName === "Home" ? <HomeIcon /> : <LocalDrinkRoundedIcon />}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {pageName}
        </Typography>
        <View>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleClose("Home")}>Home</MenuItem>
            <MenuItem onClick={() => handleClose("Feeder")}>
              Feeder Stats
            </MenuItem>
            <MenuItem onClick={() => handleClose("Drinker")}>
              Drinker Stats
            </MenuItem>
          </Menu>
        </View>
      </Toolbar>
    </AppBar>
  );
}
