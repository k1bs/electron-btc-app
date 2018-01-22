const electron = require('electron')
const path = require('path')
const remote = electron.remote
const ipc = electron.ipcRenderer

const closeBtn = document.getElementById('close-button')

closeBtn.addEventListener('click', (event) => {
  let window = remote.getCurrentWindow()
  window.close()
})

const updateBtn = document.getElementById('update-button')

updateBtn.addEventListener('click', () => {
  ipc.send('update-notify-value', document.getElementById('notify-val').value)

  const window = remote.getCurrentWindow()
  window.close()
})
