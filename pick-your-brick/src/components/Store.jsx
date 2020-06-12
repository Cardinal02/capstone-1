import React, { useContext } from "react";
import { PybContext } from "./PybContext";
import { Grid } from "@material-ui/core";
import Item from "./Item";
import Search from "./search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function Store() {
  const [legoSets, setLegoSets] = useContext(PybContext); //uses the product context to acces the legosets data

  return (
    <React.Fragment>
      <Typography
        component={Paper}
        variant="h6"
        fontWeight="fontWeightBold"
        color="secondary"
        elevation={3}
        align="center"
      >
        FREE SHIPPING AND FREE FACEMASKS WITH EVERY ORDER
      </Typography>

      <Search />
      <Grid container spacing={10} style={{ padding: "10px" }}>
        {legoSets.map(
          (
            singleItem,
            addToCart //mapping individual lego set data into the Item component in order to render them in store
          ) => {
            return (
              <Grid
                key={singleItem.itemID}
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
              >
                <Item
                  key={singleItem.itemID}
                  item={singleItem.item}
                  itemID={singleItem.itemID}
                  price={singleItem.price}
                  quantity={1}
                  pic={singleItem.pic}
                  manufacturer={singleItem.manufacturer}
                  category={singleItem.category}
                  description={singleItem.description}
                  addToCart={addToCart}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </React.Fragment>
  );
}
