const electron = require('electron')
const path = require('path')
const remote = electron.remote

const closeBtn = document.getElementById('close-button')

closeBtn.addEventListener('click', (event) => {
  let window = remote.getCurrentWindow()
  window.close()
})
