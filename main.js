const { app, BrowserWindow, globalShortcut } = require('electron')

let win;

function createWindow () {
    win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    frame: true,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadURL('http://google.com')
}

function toggleDevTools () {
    win.webContents.toggleDevTools()
}

function closeWindow () {
    win.close()
}

function createShotcuts(){
    globalShortcut.register('CmdOrCtrl+J',toggleDevTools)
    globalShortcut.register('CmdOrCtrl+Delete',closeWindow)
}

app.whenReady()
.then(createWindow)
.then(createShotcuts)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})




