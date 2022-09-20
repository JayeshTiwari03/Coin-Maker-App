import * as React from "react";
import PropTypes from "prop-types";
import { Divider, Grid, Link } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import "./styles.css";

const InfoDialog = ({
  onClose,
  selectedValue,
  open,
  coinData,
  loading,
  error,
}) => {
  const {
    name,
    symbol,
    hashing_algorithm,
    description: { en },
    genesis_date,
    links: { homepage },
    market_data: {
      market_cap: { eur },
    },
  } = coinData;

  const handleClose = () => {
    onClose(selectedValue);
  };

  if (error) {
    return <div>Some error occured</div>;
  } else if (!loading) {
    return <div data-testid="main-container">Loading...</div>;
  } else {
    return (
      <Dialog onClose={handleClose} open={open} fullWidth maxWidth={600}>
        <Grid className="dialog-container">
          <Typography variant="h5" gutterBottom>
            Name - {name}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            Symbol - {symbol}
          </Typography>
          <Divider />
          <Grid>
            <Typography variant="caption" gutterBottom>
              Hashing Algorithm -{" "}
              {hashing_algorithm ? hashing_algorithm : "Not found"}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <div dangerouslySetInnerHTML={{ __html: en }} />
            </Typography>
            <Divider />
            <Typography variant="subtitle2" gutterBottom>
              Market Cap - {eur}€
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <Link href={homepage[0]}>{homepage[0]}</Link>
            </Typography>
            <Divider />
            <Typography variant="caption" display="block" gutterBottom>
              Genesis Date - {genesis_date ? genesis_date : "N/A"}
            </Typography>
          </Grid>
        </Grid>
      </Dialog>
    );
  }
};

InfoDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  selectedValue: PropTypes.string,
  coinData: PropTypes.object,
};

export default InfoDialog;
