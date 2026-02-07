import { useState } from "react";
import { Box } from "@mui/material";

import PlanningProgress from "./plannig-pogress/planning-progress.component";
import StatsCard from "./stats-card/stats-card.component";
import ToggleComponent from "./toggle-switch/toggle-switch.component";
import {
  ToggleTabs,
  type ToggleTabValue,
} from "./toggle-switch/toggle-componen.constants";

import styles from "./perspectives.styles";
import { TAB_CONTENT } from "./perspectives.constant";
import { OverviewCardsData } from "./DUMMY_DATA";

const Perspectives = () => {
  const [activeTab, setActiveTab] = useState<ToggleTabValue>(
    ToggleTabs.OVERVIEW,
  );

  const handleActiveTabChange = (tab: ToggleTabValue) => {
    setActiveTab(tab);
  };

  return (
    <Box sx={styles.container}>
      <PlanningProgress progress={100} />

      <Box sx={styles.statsWrapper}>
        {OverviewCardsData.map((card) => (
          <StatsCard key={card.id} {...card} />
        ))}
      </Box>

      <ToggleComponent
        activeTab={activeTab}
        onTabChange={handleActiveTabChange}
      />

      {TAB_CONTENT[activeTab]}
    </Box>
  );
};

export default Perspectives;
