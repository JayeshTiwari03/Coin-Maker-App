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
    <Grid>
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
            <p>
              Current
              <br></br>
              <Chip label={currentPrice} />
            </p>
            <p>
              High 24 hour
              <br></br>
              <Chip label={highPrice} variant="outlined" />
            </p>
            <p>
              Low 24 hour
              <br></br>
              <Chip label={lowPrice} variant="outlined" />
            </p>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

Cards.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  highPrice: PropTypes.number.isRequired,
  lowPrice: PropTypes.number.isRequired,
};

export default Cards;
