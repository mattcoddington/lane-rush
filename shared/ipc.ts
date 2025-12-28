export type AppInfo = {
  version: string;
  platform: NodeJS.Platform;
};

export type LaneRushAPI = {
  getAppInfo(): Promise<AppInfo>;
};
