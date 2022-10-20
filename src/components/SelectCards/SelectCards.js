/** @format */

import { Card, CardMedia } from "@mui/material";
import React from "react";
import SelectCards1 from "../../../src/asset/270009719_154276916935872_479204212950054137_n.jpeg";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";

//const buttons = [
//<Button key="one">One</Button>,
//<Button key="two">Two</Button>,
//<Button key="three">Three</Button>,
//];

function SelectCards() {
  return (
    <Card
      className="container-ui"
      sx={{ maxWidth: 320 }}
      width="auto"
      padding="90px"
    >
      <CardMedia
        width="auto"
        padding="90px"
        component="img"
        alt="T-SHIT"
        height="200"
        image={SelectCards1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          T-SHIT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          <Button color="secondary"  size="small" aria-label="medium secondary button group">
            View More
          </Button>
        </Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Button color="secondary" aria-label="medium secondary button group">
            $.
          </Button>
          <ButtonGroup
            color="secondary"
            aria-label="medium secondary button group"
          >
            <Button direction="row" spacing={2}>Qto</Button>
            <Button>
              <RemoveIcon />
            </Button>
            <Button>
              <AddIcon />
            </Button>
            <Button>
              <AddShoppingCartIcon />
            </Button>
          </ButtonGroup>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default SelectCards;
