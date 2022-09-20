import React, { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import Cards from "../shared/Cards";
import InfoDialog from "../shared/InfoDialog";
import "./styles.css";
import usePagination from "../utils/usePagination";

const ViewCoins = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [coinData, setCoinData] = useState([]);
  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const fetchCoinData = (coinId) => {
    setOpen(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((response) => response.json())
      .then(
        (result) => {
          setLoading(true);
          setCoinData(result);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div data-testid="container">Loading...</div>;
  } else {
    return (
      <>
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="center"
          className="card-container"
        >
          {data &&
            data.map(
              ({
                id,
                image,
                name,
                symbol,
                current_price,
                high_24h,
                low_24h,
              }) => (
                <div
                  key={id}
                  onClick={() => fetchCoinData(id)}
                  className="clickable-card"
                >
                  <Cards
                    image={image}
                    name={name}
                    symbol={symbol}
                    currentPrice={current_price}
                    highPrice={high_24h}
                    lowPrice={low_24h}
                  />
                </div>
              )
            )}

          {coinData.length !== 0 && (
            <InfoDialog
              open={open}
              onClose={handleClose}
              handleClick={fetchCoinData}
              coinData={coinData}
              loading={loading}
              error={error}
            />
          )}
        </Grid>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          className="pagination"
        />
      </>
    );
  }
};

export default ViewCoins;
