const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("laneRush", {
  getAppInfo: () => ipcRenderer.invoke("get-app-info"),
});
