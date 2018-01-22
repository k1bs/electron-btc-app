const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const fetch = require('cross-fetch')

const notifyBtn = document.getElementById('notify-button')
const price = document.querySelector('h1')
const targetPrice = document.getElementById('target-price')

function getBTC () {
  fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => res.json())
    .then(json => {
      const cryptos = json.BTC.USD
      price.innerHTML = `$ ${cryptos.toLocaleString('en')}`
    })
}

getBTC()

setInterval(getBTC, 30000)

notifyBtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, 'add.html')
  let win = new BrowserWindow({frame: false, transparent: true, alwaysOnTop: true, width: 400, height: 200})
  win.on('close', () => {
    win = null
  })
  win.loadURL(modalPath)
  win.show()
})
