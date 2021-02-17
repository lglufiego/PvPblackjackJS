function shuffleDeck () {
  var baralhoCopia = JSON.parse(JSON.stringify(deck))
  var baralhoEmbaralhado = []

  while (baralhoCopia.length > 0) {
    var randomN = Math.floor(Math.random() * baralhoCopia.length)
    var cartaSorteada = baralhoCopia[randomN]

    baralhoEmbaralhado.push(cartaSorteada)
    baralhoCopia[randomN] = baralhoCopia[baralhoCopia.length-1]
    baralhoCopia.pop()
  }
  return baralhoEmbaralhado
}

var deck = [
  { url: 'https://imgur.com/4szmWyn.png' , naipe: 'copas', valor: 'A' },
   { url: 'https://i.imgur.com/D5cPzuE.png', naipe: 'copas', valor: 2 },
  { url: 'https://i.imgur.com/CqpR6ly.png', naipe: 'copas', valor: 3 },
  { url: 'https://imgur.com/bRNmdDa.png', naipe: 'copas', valor: 4 },
  {	url: 'https://imgur.com/8P9JYCY.png', naipe: 'copas', valor: 5 },
  { url: 'https://imgur.com/iop151s.png', naipe: 'copas', valor: 6 },
  { url: 'https://imgur.com/N5sQonr.png', naipe: 'copas', valor: 7 },
  { url: 'https://imgur.com/jIUG0u5.png', naipe: 'copas', valor: 8 },
  { url: 'https://imgur.com/4G1vURI.png', naipe: 'copas', valor: 9 },
  { url: 'https://i.imgur.com/uheNV3x.png', naipe: 'copas', valor: 10 },
  { url: 'https://imgur.com/NQxQzAc.png', naipe: 'copas', valor: 'J' },
  {	url: 'https://imgur.com/8MZdWlD.png', naipe: 'copas', valor: 'Q' },
  { url: 'https://imgur.com/DepblCc.png', naipe: 'copas', valor: 'K' },
  
  { url: 'https://imgur.com/VBiMMXC.png', naipe: 'espada' , valor: 'A' },
  { url: 'https://i.imgur.com/772v4wW.png', naipe: 'espada' , valor: 2 },
  { url: 'https://i.imgur.com/zXjF1wr.png', naipe: 'espada' , valor: 3 },
  { url: 'https://imgur.com/6F0KfHI.png', naipe: 'espada' , valor: 4 },
   { url: 'https://imgur.com/IN0eB28.png', naipe: 'espada' , valor: 5 },
   { url: 'https://imgur.com/k5lgWph.png', naipe: 'espada' , valor: 6 },
  { url: 'https://imgur.com/neznP4R.png', naipe: 'espada' , valor: 7 },
  { url: 'https://imgur.com/qRjH05S.png', naipe: 'espada' , valor: 8 },
  { url: 'https://imgur.com/W5BVmqL.png', naipe: 'espada' , valor: 9 },
  { url: 'https://i.imgur.com/i6dxkDR.png', naipe: 'espada' , valor: 10 },
  { url: 'https://imgur.com/rH3p2wL.png', naipe: 'espada' , valor: 'J' },
  { url: 'https://imgur.com/kTzRDXU.png', naipe: 'espada' , valor: 'Q' },
  { url: 'https://imgur.com/mdf6Jyx.png', naipe: 'espada' , valor: 'K' },
           
  { url: 'https://imgur.com/wsRAi0q.png', naipe: 'paus' , valor: 'A' },
   { url: 'https://i.imgur.com/XbKg0p1.png', naipe: 'paus' , valor: 2 },
   { url: 'https://i.imgur.com/J5TojI2.png', naipe: 'paus' , valor: 3 },
   { url: 'https://imgur.com/p1IaarS.png', naipe: 'paus' , valor: 4 },
  { url: 'https://imgur.com/XcAbhY6.png', naipe: 'paus' , valor: 5 },
   { url: 'https://imgur.com/tbGOkbB.png', naipe: 'paus' , valor: 6 },
  { url: 'https://imgur.com/qAFPRWl.png', naipe: 'paus' , valor: 7 },
  { url: 'https://imgur.com/JaY9FpL.png', naipe: 'paus' , valor: 8 },
  { url: 'https://imgur.com/Zu8XFfM.png', naipe: 'paus' , valor: 9 },
  { url: 'https://i.imgur.com/BordaJV.png', naipe: 'paus' , valor: 10 },
  { url: 'https://imgur.com/48LYhwV.png', naipe: 'paus' , valor: 'J' },
  { url: 'https://imgur.com/BAUOV4x.png', naipe: 'paus' , valor: 'Q' },
  { url: 'https://imgur.com/eVT10yK.png', naipe: 'paus' , valor: 'K' },
  
   { url: 'https://imgur.com/RHfRNJS.png', naipe: 'ouro' , valor: 'A' },
   { url: 'https://i.imgur.com/9WrM6UL.png', naipe: 'ouro' , valor: 2 },
   { url: 'https://i.imgur.com/53mgXoD.png', naipe: 'ouro' , valor: 3 },
   { url: 'https://imgur.com/R4yBp38.png', naipe: 'ouro' , valor: 4 },
   { url: 'https://imgur.com/AcbMliV.png', naipe: 'ouro' , valor: 5 },
   { url: 'https://imgur.com/SMGUZnm.png', naipe: 'ouro' , valor: 6 },
   { url: 'https://imgur.com/be9kEj9.png', naipe: 'ouro' , valor: 7 },
  { url: 'https://imgur.com/6Rp7A2T.png', naipe: 'ouro' , valor: 8 },
   { url: 'https://imgur.com/qfuYqJg.png', naipe: 'ouro' , valor: 9 },
   { url: 'https://i.imgur.com/XLWHGK5.png', naipe: 'ouro' , valor: 10 },
   { url: 'https://imgur.com/SsuO23W.png', naipe: 'ouro' , valor: 'J' },
   { url: 'https://imgur.com/RszxO6U.png', naipe: 'ouro' , valor: 'Q' },
   { url: 'https://imgur.com/OySzxSm.png', naipe: 'ouro' , valor: 'K' },  
]
 
var player1Deck = []
var player2Deck = []
var count = [0, 0]
 var player1Cards = [];
var player2Cards = [];
// retorna um baralho embaralhado


player1Deck = shuffleDeck()
player2Deck = shuffleDeck()
 
function updateCount (x) {
  count[x] = 0
  var aces = 0
  
  var playerCards = []
  if (x === 0) {
    playerCards = player1Cards
  } else {
    playerCards = player2Cards
  }
  
  for (const cartaJogada of playerCards) { 
    if(!isNaN(cartaJogada.valor)) {
      count[x] += cartaJogada.valor
    } else if (cartaJogada.valor !== 'A') {
      count[x] += 10
    } else {
      aces++
    }
  }
  while (aces > 1) {
    count[x] += 1
    aces--
  }
  if(aces === 1 && count[x] + 11 > 21) {
    count[x] += 1
  } else if (aces === 1) {
    count[x] += 11
  }
  
  document.getElementById('count' + (x+1)).innerText = count[x]
  
  if(count[x] > 21 || (count[0] === 21 && count[1] === 21)){
    gameOver('player' + (x+1))
  } // TODO end game for the OTHER player if count[x] === 21
  
}

function hit (player) {
  if (player == 'player1') {
       if(count[0] === 21) {
        return
      }
      // player 1 jogando
      var cartaJogada = player1Deck.pop()
      player1Cards.push(cartaJogada)
      
      document.getElementById('player1card').src = player1Cards[player1Cards.length-1].url
      document.getElementById('playedCards1').innerHTML += `<img style="width:51px;height:80px;" src="${player1Cards[player1Cards.length-1].url}"/>`
      
      updateCount(0)
  } else {
    if(count[1] === 21) {
        return
      }
      // player 2 jogando
      var cartaJogada = player2Deck.pop()
      player2Cards.push(cartaJogada)
      
      document.getElementById('player2card').src = player2Cards[player2Cards.length-1].url
      document.getElementById('playedCards2').innerHTML += `<img style="width:51px;height:80px;" src="${player2Cards[player2Cards.length-1].url}"/>`
      
      updateCount(1)
  }

}
 
function stop (player) {
  if (player === 'player1') {
    if (count[1] >= count[0]) {
      return
    }

    document.querySelector('.leftSide').style.backgroundColor = 'rgba(255,255,255,0.3)'
    document.querySelector('.rightSide').style.backgroundColor = 'rgba(255,255,255,0.7)'
    document.getElementById('hit2').disabled = false
    document.getElementById('stop2').disabled = false
    
    document.getElementById('hit1').disabled = true
    document.getElementById('stop1').disabled = true
  } else {
    if (count[0] >= count[1]) {
      return
    }

    document.querySelector('.rightSide').style.backgroundColor = 'rgba(255,255,255,0.3)'
    document.querySelector('.leftSide').style.backgroundColor = 'rgba(255,255,255,0.7)'
    document.getElementById('hit1').disabled = false
    document.getElementById('stop1').disabled = false
    
    document.getElementById('hit2').disabled = true
    document.getElementById('stop2').disabled = true
  }

}

function gameOver () {
  // TODO: Display "you are the winer gratuleixos" to the player who wins and "you suck dick" to the player who lostes
  
   if (count[0] > 21 || count[0] > 21 && count[1] <= 21 && count[1] > 0){
    document.getElementById('modalMsg').innerText ="Player 1 perdeu. Player 2 venceu!"
    document.getElementById('modalBackdrop').className = 'modal-backdrop'
    document.getElementById('modalBox').className = 'modal d-block'
    document.getElementById('hit2').disabled = true
    document.getElementById('stop2').disabled = true
    document.getElementById('hit1').disabled = true
    document.getElementById('stop1').disabled = true


  } if ( count[1] > 21 || count[1] > 21 && count[0] <= 21 && count[0] > 0 ) {
    document.getElementById('modalMsg').innerText ='Player 2 perdeu. Player 1 venceu!'
    document.getElementById('modalBackdrop').className = 'modal-backdrop'
    document.getElementById('modalBox').className = 'modal d-block'
    document.getElementById('hit2').disabled = true
    document.getElementById('stop2').disabled = true
    document.getElementById('hit1').disabled = true
    document.getElementById('stop1').disabled = true

  }
  
  if ( count[0] == 21 && count [1] == 21) {
      if(player1Cards.length < player2Cards.length) {
        console.log('Player 1 wins!')
        document.getElementById('modalMsg').innerText = 'Player 1 wins!'
        document.getElementById('modalBackdrop').className = 'modal-backdrop'
        document.getElementById('modalBox').className = 'modal d-block'
      } else if(player1Cards.length > player2Cards.length) {
        console.log('Player 2 wins!')
        document.getElementById('modalMsg').innerText = 'Player 2 wins!'
        document.getElementById('modalBackdrop').className = 'modal-backdrop'
        document.getElementById('modalBox').className = 'modal d-block'
      } else {
        document.getElementById('modalMsg').innerText ='IT\'S A TIE!'
        document.getElementById('modalBackdrop').className = 'modal-backdrop'
        document.getElementById('modalBox').className = 'modal d-block'
      }
  }
}

function closeModal () {
  document.getElementById('modalBackdrop').className =''
  document.getElementById('modalBox').className = 'modal'
}

function restartGame() {

  player1Deck = []
  player2Deck = []
  count = [0, 0]
  player1Cards = [];
  player2Cards = [];

  player1Deck = shuffleDeck()
  player2Deck = shuffleDeck()
  
  document.getElementById("playedCards1").innerHTML = ''
  document.getElementById("playedCards2").innerHTML = ''

  document.getElementById('player1card').src = 'https://imgur.com/3JKxK78.png'
  document.getElementById('player2card').src = 'https://imgur.com/3JKxK78.png'
  
  document.querySelector('.rightSide').style.backgroundColor = 'rgba(255,255,255,0.3)'
  document.querySelector('.leftSide').style.backgroundColor = 'rgba(255,255,255,0.7)'
  
  count[0] = 0
  count[1] = 0
  
  document.getElementById('count1').innerText = count[0]
  document.getElementById('count2').innerText = count[1]
  
  document.getElementById('hit1').disabled = false
  document.getElementById('stop1').disabled = false
  
  
  document.getElementById('hit2').disabled = true
  document.getElementById('stop2').disabled = true

        
   document.getElementById('modalBackdrop').className = ''
  document.getElementById('modalBox').className = 'modal'
}