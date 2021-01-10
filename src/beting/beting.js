import React, { useEffect, useState } from "react";
import "./beting.css";
import { fetchCandidates,updatePrice } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Player from "./player";
import { Link } from "react-router-dom";

function Beting(props) {
  const { fetchCandidates, selectedPlayer, candidatesData,updatePrice } = props;
  //   const [data, setData] = useState({ serch: "", data: candidatesData });
  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);
  console.log(selectedPlayer);
  //   const searchHandler = (event) => {
  //     const name = event.target.value;
  //     const filteData = candidatesData.filter((candi) => {
  //       return candi.name.toLowerCase().includes(name.toLowerCase());
  //     });
  //     setData({ serch: name, data: filteData });
  //   };
  let random = Math.floor(Math.random() * 10);
  if(random===0) random=1;
  return (
    <div>
      {/* <div className="search">
        <div>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value={data.serch}
          onChange={(event) => {
            searchHandler(event);
          }}
        />
      </div> */}

      <Typography>All Candidates</Typography>
      <Typography variant="h2">{random}</Typography>
      <div className="cards">
        {selectedPlayer.map((data, index) => {
          return <Player key={data.id} data={data} random={random} updatePrice={updatePrice} />;
        })}
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={selectedPlayer.length < 1}
            >
              Back
            </Button>
          </Link>
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
      updatePrice
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapActionToProps)(Beting);
