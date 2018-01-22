const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const fetch = require('cross-fetch')

const notifyBtn = document.getElementById('notify-button')

notifyBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, 'add.html')
  let win = new BrowserWindow({frame: false, transparent: true, alwaysOnTop: true, width: 400, height: 200})
  win.on('close', () => {
    win = null
  })
  win.loadURL(modalPath)
  win.show()
})
