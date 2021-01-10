import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { Divider, ListItemIcon, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "16px",
    marginTop: "32px",
    // maxWidth: 360,

    backgroundColor: theme.palette.background.paper,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    // flexWrap:"wrap"
    columnGap: "80px",
    // justifyContent: "space-between",
  },
  text: {
    width: "10px",
  },
  page: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    //   width:'50px',
    //   columnGap: "50px",
    justifyContent: "space-between",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function SelectedPlayers(props) {
  const { players, selected, selectedPlayer } = props;
  const classes = useStyles();
  const [search, setSearch] = useState({ search: "", data: [] });
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    selected(newChecked);
  };
  console.log(checked);

  const searchHandler = (event) => {
    const data = event.target.value;
    const filterData = players.filter((value) => {
      return value.Name.toLowerCase().includes(data.toLowerCase());
    });
    setSearch({ ...search, search: data, data: filterData });
  };

  return (
    <div className={classes.root}>
      <Typography>Select 9 Players</Typography>
      <TextField
        id="standard-basic"
        placeholder="search players..."
        value={search.search}
        onChange={(event) => {
          searchHandler(event);
        }}
      />

      <List className={classes.root}>
        <Fragment>
          <ListItem button>
            <ListItemText primary={"Select"} className={classes.text} />
            {/* <ListItemText primary={"Avtar"} className={classes.text} /> */}
            <ListItemText primary={"Name"} className={classes.text} />
            <ListItemText primary={"Price"} className={classes.text} />
            {/* <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon> */}
            <ListItemText primary={"Bet"} className={classes.text} />
            {/* <ListItemIcon>
              <MonetizationOnIcon />
            </ListItemIcon> */}
            {/* <ListItemText primary={"Bet"} className={classes.text} />
            <ListItemText primary={"Bet"} className={classes.text} />
            <ListItemText primary={"Bet"} className={classes.text} />
            <ListItemText primary={"Bet"} className={classes.text} />
            <ListItemText primary={"Bet"} className={classes.text} /> */}
          </ListItem>
          <Divider />
        </Fragment>
        {search.search === ""
          ? players.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <Fragment>
                  <ListItem key={value} button className={classes.list}>
                    {/* <ListItemSecondaryAction> */}
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                    {/* </ListItemSecondaryAction> */}
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${value + 1}`}
                        src={value["Profile Image"]}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={value.Name}
                      className={classes.text}
                    />
                    <ListItemText
                      id={labelId}
                      primary={value.Price}
                      className={classes.text}
                    />
                    <ListItemText
                      id={labelId}
                      primary={value.Bet}
                      className={classes.text}
                    />
                   
                  </ListItem>
                  <Divider />
                </Fragment>
              );
            })
          : search.data.map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <Fragment>
                  <ListItem key={value} button className={classes.list}>
                    {/* <ListItemSecondaryAction> */}
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(value)}
                      checked={checked.indexOf(value) !== -1}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                    {/* </ListItemSecondaryAction> */}
                    {/* <ListItemAvatar> */}
                    <Avatar
                      alt={`Avatar n°${value + 1}`}
                      src={value["Profile Image"]}
                    />
                    {/* </ListItemAvatar> */}
                    <ListItemText
                      id={labelId}
                      primary={value.Name}
                      className={classes.text}
                    />
                    <ListItemText
                      id={labelId}
                      primary={value.Price}
                      className={classes.text}
                    />
                    <ListItemText
                      id={labelId}
                      primary={value.Bet}
                      className={classes.text}
                    />
                  </ListItem>
                  <Divider />
                </Fragment>
              );
            })}
      </List>
    </div>
  );
}
