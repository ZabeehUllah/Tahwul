import React from "react";
import DetailsTable from "./details-table/details-table";
import LeadersSection from "./leaders/leaders.component";

const OverviewTab = () => {
  return (
    <React.Fragment>
      <DetailsTable />
      <LeadersSection />
    </React.Fragment>
  );
};

export default OverviewTab;
