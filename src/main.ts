import { app, BrowserWindow } from "electron";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.webContents.openDevTools();
  mainWindow.loadFile("../index.html");
});
