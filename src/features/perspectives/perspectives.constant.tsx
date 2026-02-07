import type { JSX } from "react";

import { ToggleTabs, type ToggleTabValue } from "./toggle-switch/toggle-componen.constants";
import OverviewTab from "./overview/overview-tab.component";
import EvidenceTab from "./evidence/evidence-tab.component";

export const TAB_CONTENT: Record<ToggleTabValue, JSX.Element> = {
  [ToggleTabs.OVERVIEW]: <OverviewTab />,
  [ToggleTabs.EVIDENCE]: <EvidenceTab />,
};