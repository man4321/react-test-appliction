import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { Button, Divider, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Link } from "react-router-dom";
import CommentIcon from "@material-ui/icons/Comment";
import SelectedPlayers from "./selectPlayers";
import { fetchCandidates, shortList, updatePrice } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./beting.css";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    marginTop: "64px",
  },
}));

function PlayerList(props) {
  const {
    candidatesData,
    fetchCandidates,
    shortList,
    selectedPlayer,
    updatePrice,
  } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  return (
    <div className="root">
      <List className={classes.root}>
        <Typography>Selected Players</Typography>
        {selectedPlayer.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} role={undefined} dense button>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={value["Profile Image"]}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value.Name} />
              <ListItemText id={labelId} primary={value.Price} />
              <ListItemText id={labelId} primary={value.Bet} />
            </ListItem>
          );
        })}
        {selectedPlayer.length >= 1 ? (
          <Link to="/bet" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={selectedPlayer.length < 1}
            >
              Start
            </Button>
          </Link>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            disabled={selectedPlayer.length < 1}
          >
            Start
          </Button>
        )}
      </List>
      <Divider />
      <SelectedPlayers
        players={candidatesData}
        selected={shortList}
        selectedPlayer={selectedPlayer}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    candidatesData: state.candidatesData,
    selectedPlayer: state.shortListed,
  };
};
const mapActionToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchCandidates,
      shortList,
      updatePrice,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(PlayerList);
