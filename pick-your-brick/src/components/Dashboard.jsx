import React from "react";
import sample from "../assets/sampleDashboard.png";
export default function Dashboard() {
  return (
    //For now renders a sample image of how I want my dashboard to look like
    <React.Fragment>
      <img src={sample} alt="sample dashboard" width="80%" height="450px" />
    </React.Fragment>
  );
}
