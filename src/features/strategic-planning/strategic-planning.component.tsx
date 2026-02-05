import { useState } from "react";
import { Box } from "@mui/material";

import PlanningProgress from "./plannig-pogress/planning-progress.component";
import StatsCard from "./stats-card/stats-card.component";
import ToggleComponent from "./toggle-switch/toggle-switch.component";
import {
  ToggleTabs,
  type ToggleTabValue,
} from "./toggle-switch/toggle-componen.constants";

import { columns, OverviewCardsData, rows } from "./DUMMY_DATA";
import CustomDataGrid from "../../components/table-component/table-compoent";
import Comments from "./evidence/comments/comments.component";
import RecentActivities from "./evidence/recent-activities/recent-activities.component";
import LeadersSection from "./overview/leaders/leaders.component";
import DetailsTable from "./overview/details-table/details-table";

const StrategicPlanning = () => {
  const [activeTab, setActiveTab] = useState<ToggleTabValue>(
    ToggleTabs.OVERVIEW,
  );

  const handleActiveTabChange = (tab: ToggleTabValue) => {
    setActiveTab(tab);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      <PlanningProgress progress={100} />
      <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
        {OverviewCardsData.map(({ id, label, value, icon }) => (
          <StatsCard key={id} label={label} value={value} icon={icon} />
        ))}
      </Box>

      <ToggleComponent
        activeTab={activeTab}
        onTabChange={handleActiveTabChange}
      />

      {activeTab === ToggleTabs.EVIDENCE && (
        <>
          <CustomDataGrid
            rows={rows}
            columns={columns}
            keyExtractor={(row) => row.id}
            headerBgColor="#F5F8FB"
            borderRadius="12px"
            stickyHeader
            rowHover
            onRowClick={() => console.log("Row")}
          />

          <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
            <Box sx={{ width: "70%" }}>
              <Comments />
            </Box>

            <Box sx={{ width: "30%" }}>
              <RecentActivities />
            </Box>
          </Box>
        </>
      )}

      {activeTab === ToggleTabs.OVERVIEW && (
        <>
          <DetailsTable />
          <LeadersSection />
        </>
      )}
    </Box>
  );
};

export default StrategicPlanning;
