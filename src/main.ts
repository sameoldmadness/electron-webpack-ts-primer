import { app, BrowserWindow } from 'electron'

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })

  mainWindow.webContents.openDevTools()
  mainWindow.loadFile('../index.html')
}

app.on('ready', createWindow)
