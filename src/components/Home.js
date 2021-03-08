import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CoverImg from "../images/coverimg.png";
import PlaceHolderImg from "../images/cardplaceholder.png";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
//import { Link, withRouter } from 'react-router-dom';

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 50,
      fontFamily: "Nunito Sans, Roboto, sans-serif",
      color: "white",
    },
    h3: {
      fontSize: 30,
      fontFamily: "Nunito Sans, Roboto, sans-serif",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "2vw",
    textAlign: "center",
    marginTop: "1vh",
    marginBottom: "5vh",
  },
}));

const ActionButton = withStyles((theme) => ({
  root: {
    fontFamily: "Nunito Sans, Roboto, sans-serif",
    fontWeight: "800",
    color: "black",
    textTransform: "none",
    backgroundColor: "#ffcb05",
    "&:hover": {
      backgroundColor: "#ffdb50",
      spacing: 8,
    },
  },
}))(Button);

export const Home = (props) => {
  const { history } = props;
  const classes = useStyles();

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };
  //<Box bgcolor="#957CB6">
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Box>
          <Box bgcolor="#957CB6">
            <Grid container spacing={3}>
              <Box m={1}></Box>

              <Grid item xs={12} sm={6}></Grid>

              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  mt={35}
                  pl={2}
                  textAlign="center"
                >
                  <Typography variant="h2">
                    View the entire Pokemon card collection and compare their
                    stats!{" "}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="center" m={1} mt={5}>
                  <ActionButton
                    size="large"
                    varriant="contained"
                    onClick={() => handleButtonClick("/home")}
                  >
                    View the collection
                  </ActionButton>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  m={1}
                  mt={25}
                  mb={20}
                >
                  <img
                    m={5}
                    src={CoverImg}
                    alt="Logo"
                    className={classes.title}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <Box textAlign="center" pt={10}>
                <Typography variant="h3" backgroundColor="#957CB6">
                  Pokemon lookup
                </Typography>
              </Box>
              <Box m={70} className={classes.paper}>
                {" "}
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputAdornment position="start">
                    <SearchIcon></SearchIcon>
                  </InputAdornment>
                  <TextField
                    id="outlined-basic"
                    label="Search Cards"
                    variant="outlined"
                  />
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Box textAlign="center" pt={10}>
                <Typography variant="h3" backgroundColor="#957CB6">
                  Popular Cards
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box textAlign="center" pt={10}>
                <Card className={classes.root}>
                  <CardHeader
                    action={<IconButton aria-label="settings"></IconButton>}
                    title="PokemonCard1"
                    subheader="Released: September 14, 1992"
                  />
                  <CardMedia className={classes.media} title="PokemonCard1" />
                  <img src={PlaceHolderImg} alt=""></img>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Info on Card goes here
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3}>
              <Box textAlign="center" pt={10}>
                {" "}
                <Card className={classes.root}>
                  <CardHeader
                    action={<IconButton aria-label="settings"></IconButton>}
                    title="PokemonCard2"
                    subheader="Released: September 14, 1992"
                  />
                  <CardMedia className={classes.media} title="PokemonCard2" />
                  <img src={PlaceHolderImg} alt=""></img>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Info on Card goes here
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box textAlign="center" pt={10}>
                {" "}
                <Card className={classes.root}>
                  <CardHeader
                    action={<IconButton aria-label="settings"></IconButton>}
                    title="PokemonCard3"
                    subheader="Released: September 14, 1992"
                  />
                  <CardMedia className={classes.media} title="PokemonCard3" />
                  <img src={PlaceHolderImg} alt=""></img>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Info on Card goes here
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box textAlign="center" pt={10}>
                <Card className={classes.root}>
                  <CardHeader
                    action={<IconButton aria-label="settings"></IconButton>}
                    title="PokemonCard4"
                    subheader="Released: September 14, 1992"
                  />
                  <CardMedia className={classes.media} title="PokemonCard4" />
                  <img src={PlaceHolderImg} alt=""></img>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Info on Card goes here
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
};
