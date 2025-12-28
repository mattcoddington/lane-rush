import type { LaneRushAPI } from "../../shared/ipc";

declare global {
  interface Window {
    laneRush: LaneRushAPI;
  }
}

export {};
