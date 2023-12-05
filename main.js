const { app, BrowserWindow } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('node:path')

// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 530,
    height: 560,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    autoHideMenuBar: true,
    // frame: false,
    fullscreen: false,
    icon: "images/oink.ico"
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})