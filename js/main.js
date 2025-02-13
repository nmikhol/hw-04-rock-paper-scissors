$(function () {
  let playerScore = 0
  let botScore = 0
  let playerChoice
  let botChoice

  $("button").not('#reset').click((event) => {
    playerChoice =  $(event.currentTarget).attr('id')
    botChoice = generateBotChoice()
    compare(botChoice, playerChoice)
  })

  $('#reset').click(() => {
     playerScore = 0
     botScore = 0
     clearStatus()
     $('#humanScore').html(playerScore)
     $('#computerScore').html(botScore)
   })

  function generateBotChoice() {
    let botChoice
    const number = Math.floor(Math.random() * 3) + 1;
    if(number === 1){
     botChoice = 'rock'
      } else if(number === 2){
        botChoice = 'paper'
      } else {
        botChoice = 'scissors'
      }
    return botChoice
  }

  function compare(botChoice, playerChoice) {
    if(botChoice === playerChoice){
      clearStatus()
      $('#status').append(`You played <u>${playerChoice}</u>. The bot played <u>${botChoice}</u>. It's a tie!`)
    } else if(botChoice === "rock"){
        if(playerChoice === 'scissors'){
          clearStatus()
          $('#status').append(`You played <u>${playerChoice}</u>. The bot played <u>${botChoice}</u>. You Lose :(`)
          $('#computerScore').html(botScore += 1)
        } else{
          clearStatus()
          $('#status').append(`You played <u>${playerChoice}</u>. The bot played <u>${botChoice}</u>. You Win!`)
          $('#humanScore').html(playerScore += 1)
        }
      } else if(botChoice === "scissors"){
        if(playerChoice === "paper"){
          clearStatus()
          $('#status').append(`You played <u>${playerChoice}</u>. The bot played <u>${botChoice}</u>. You Lose :(`)
          $('#computerScore').html(botScore += 1)
        } else{
          clearStatus()
          $('#status').append(`You played <u>${playerChoice}</u>. The bot played <u>${botChoice}</u>. You Win!`)
          $('#humanScore').html(playerScore += 1)
        }
      } else if(botChoice === "paper"){
        if(playerChoice === 'rock'){
          clearStatus()
          $('#status').append(`You played <u>${playerChoice}</u>. The bot played <u>${botChoice}</u>. You Lose :(`)
          $('#computerScore').html(botScore += 1)
        } else{
          clearStatus()
          $('#status').append(`You played <u>${playerChoice}</u>. The bot played <u>${botChoice}</u>. You Win!`)
          $('#humanScore').html(playerScore += 1)
        }
      }
  }

  function clearStatus(){
    $('#status').html('')
  }
})
