import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core";
import LogoPng from "../images/navbarlogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "primary",
  },
  navOptions: {
    display: "flex",
    flex: 1,
    margin: theme.spacing(1),
  },
}));

const Navbar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  // console.log(isMobile);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const NavButton = withStyles((theme) => ({
    root: {
      color: "black",
      fontFamily: "Nunito Sans, Roboto, sans-serif",
      fontWeight: "800",
      textTransform: "none",
      backgroundColor: "#ffcb05",
      "&:hover": {
        backgroundColor: "#ffdb50",
        spacing: 8,
      },
    },
  }))(Button);

  const LogoButton = withStyles(theme => ({
    root: {
      '&:hover': {
       // backgroundColor: '#2a363b',
       // opacity: 0.6,
      },
    },
  }))(IconButton);

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="#ffff" style={{ margin: 0}}>
        <Toolbar>
        <LogoButton component={Link} to="/home">
           <img src={LogoPng} alt="Logo"
           className={classes.title}/>
          </LogoButton>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color = "black"
          >
            
          </Typography>
          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
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
                  <MenuItem onClick={() => handleMenuClick("/home")}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/cards")}>
                    Cards
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/about")}>
                    About
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuClick("/logout")}>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              
              <div className={classes.navOptions}>

               
                

                <Typography variant="h6" className={classes.title}></Typography> 
                <Box m={1} pt={2}>

                <NavButton varriant="contained" onClick={() => handleButtonClick("/home")}>Home</NavButton>
                </Box>
                <Box m={1} pt={2}>
                <NavButton varriant="contained" onClick={() => handleButtonClick("/cards")}>Cards</NavButton>
                </Box>
                <Box m={1} pt={2}>
                <NavButton varriant="contained" onClick={() => handleButtonClick("/profile")}>Profile</NavButton>
                </Box>
                <Box m={1} pt={2}>
                <NavButton varriant="contained" onClick={() => handleButtonClick("/about")}>About</NavButton>
                </Box>
                <Box m={1} pt={2}>
                <NavButton varriant="contained" onClick={() => handleButtonClick("/logout")}>Logout</NavButton>
                </Box> 
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};


export default withRouter(Navbar);
