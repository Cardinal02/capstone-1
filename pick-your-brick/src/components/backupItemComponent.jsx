<Grid
  container
  justify="space-around"
  alignItems="center"
  className={classes.itemContainer}
>
  <Grid item>
    <h5>{props.item}</h5>
  </Grid>
  <Grid item>
    <img className={classes.image} alt="Item Image" src={props.pic} />
  </Grid>
  <Grid item>
    <p>{props.price}</p>
  </Grid>
  <Grid item>
    <button onClick={() => cartctxt.addToCart(props)}>Add to cart</button>
  </Grid>
</Grid>;
