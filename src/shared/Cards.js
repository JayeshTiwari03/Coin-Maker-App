import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Divider, Grid } from "@mui/material";
import Chip from "@mui/material/Chip";
import "./styles.css";

const Cards = ({ image, name, symbol, currentPrice, highPrice, lowPrice }) => {
  return (
    <Grid data-testid="main-container">
      <Card sx={{ minWidth: 200 }} className="card-container">
        <CardMedia
          component="img"
          alt="coin image"
          height="150"
          image={image}
          className="styled-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography>{symbol}</Typography>
          <Divider className="divider" />
          <Grid
            container
            direction="row"
            className="styled-prices"
            justifyContent="center"
          >
            <div>
              Current
              <br></br>
              <Chip label={currentPrice} />
            </div>
            <div>
              High 24 hour
              <br></br>
              <Chip label={highPrice} variant="outlined" />
            </div>
            <div>
              Low 24 hour
              <br></br>
              <Chip label={lowPrice} variant="outlined" />
            </div>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

Cards.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  currentPrice: PropTypes.number,
  highPrice: PropTypes.number,
  lowPrice: PropTypes.number,
};

export default Cards;
