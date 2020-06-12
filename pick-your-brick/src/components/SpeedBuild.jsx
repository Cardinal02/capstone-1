import React from "react";
import { Grid } from "@material-ui/core";

export default function SpeedBuild() {
  return (
    // returns a list of YouTube videos inside a Grid layout. Planning on linking these videos to the products link in future
    <React.Fragment>
      <Grid container spacing={5} style={{ padding: "50px" }}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <iframe
            title="Speed Build Demo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jC8aEtOF2Hs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <iframe
            title="Speed Build Demo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xa5pClDBRqo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <iframe
            title="Speed Build Demo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/U-U5e2Wcg_Y"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}></Grid>
      </Grid>
    </React.Fragment>
  );
}
