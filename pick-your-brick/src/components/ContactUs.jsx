import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../assets/pyb.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
  },
  margin: 50,
});

export default function ContactUs() {
  const classes = useStyles();

  return (
    // returns a simple Material UI Card component with placeholder content for ContactUS
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={logo} title="logo2" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Contact Us
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Creative Studio Never Land zip: NAN
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          CALL US
        </Button>
        <Button size="small" color="primary">
          EMAIL US
        </Button>
      </CardActions>
    </Card>
  );
}
