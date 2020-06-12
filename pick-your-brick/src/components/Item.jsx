import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { PybContext } from "./PybContext";
import { CartContext } from "./CartContext";

import { Link } from "react-router-dom";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: "80px",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  card: {
    width: 200,
  },
  // Button: { margin: 20 },
}));

//returns the data of each product that is being passed as prop in a neatly wrapped Material Ui Card component format
export default function Item(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const cartctxt = useContext(CartContext);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            //red pyb button
            <Avatar aria-label="set" className={classes.avatar}>
              PYB
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.item} //Product name
          subheader={`$${props.price}`} //Product Price
        />

        {/*//product image */}
        <CardMedia className={classes.media} image={props.pic} title="Set" />
        <CardContent align="center" justify="spaceBetween">
          <IconButton
            variant="contained"
            color="secondary"
            onClick={() => {
              alert("Added to your cart"); //function to pop up an alert
            }}
          >
            <ShoppingCartIcon
              onClick={() => cartctxt.addToCart(props)} //function to add item to cat on click
              color="secondary"
              style={{ fontSize: 50 }}
            />
          </IconButton>
          {/* A button to navigate to checkout page on click */}
          <Button
            component={Link}
            to="/cart"
            variant="contained"
            color="primary"
          >
            Checkout
            <Route exact path="/cart" />
          </Button>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Manufactured by {props.manufacturer}
            </Typography>
            <Typography paragraph>Product Theme : {props.category}</Typography>
            <Typography paragraph>{props.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
}
