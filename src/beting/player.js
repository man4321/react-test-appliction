import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  win: {
    minWidth: 250,
    maxWidth: 200,
    minHeight: 200,
    maxHeight: 300,
    height: "100%",
    margin: "16px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    border: "3px solid green",
  },
  lose: {
    minWidth: 250,
    maxWidth: 200,
    minHeight: 200,
    maxHeight: 300,
    height: "100%",
    margin: "16px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    border: "3px solid red",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: "80px",
    width: "80px",
    margin: "4px",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    // flexGrow: "-moz-initial",
    flexWrap: "wrap",
  },
});

export default function Player(props) {
  const classes = useStyles();
  const { data, random, updatePrice } = props;
  useEffect(() => {
    let price = data.Price;
    if (random == data.Bet) {
      price = data.Price * 2;
    } else {
      price = data.Price * 0;
    }
    updatePrice(data.Name, price);
  }, [updatePrice]);

  return (
    <Card className={random == data.Bet ? classes.win : classes.lose}>
      <CardContent className={classes.content}>
        <img src={data["Profile Image"]} className={classes.media} />
        <Typography variant="h6" className={classes.media}>
          {data.Name}
        </Typography>
        <Typography className={classes.media}>
          <MonetizationOnIcon />
          {data.Price}
        </Typography>
        <Typography className={classes.media}>
          <LocalAtmIcon />
          {data.Bet}
        </Typography>
        <Alert
          variant="standard"
          severity={random == data.Bet ? "success" : "error"}
        >
          {random != data.Bet ? "LOSE" : "WINNER"}
        </Alert>
      </CardContent>
    </Card>
  );
}
