// let request = require('request')
import request from 'request'
      fetchData()
      setInterval(function (){
        fetchData()
      }, 1000)

      function fetchData(argument) {
        request('https://finance.google.com/finance/info?client=ig&q=.DJI', function (err, res, body) {
          body = body.slice(3)
          body = JSON.parse(body)
          newPrice(body)
        })
      }

      let lastPrice
      let oHistory = document.getElementById('priceHistory')
      let oPrice = document.getElementById('price')
      function newPrice(arr) {
        let curPrice = arr[0]["l"]
        let oWrap = document.createElement('span')
        let newElText
        if(lastPrice<curPrice){
          newElText = "▲ "
          oWrap.className = 'up'
        }else if(lastPrice==curPrice){
          newElText = '-- '
          oWrap.className="noChange"
        }else{
          newElText = "▼ "
          oWrap.className = 'down'
        }
        let oTextNode = document.createTextNode(newElText)
        oHistory.appendChild(oWrap)
        oWrap.appendChild(oTextNode)
        
        if(oHistory.getElementsByTagName('SPAN').length==6){
          oHistory.children[0].remove()
        }
        oPrice.innerHTML = curPrice
        lastPrice = curPrice
      }