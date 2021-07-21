'use strict'

const store = require('./store.js')
const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  console.log(response)
  $('#sign-up').trigger('reset')
  $('#board').hide()
}
const onSignUpFailure = () => {
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = (response) => {
  $('#message').text(`Thank you for signing in! ${response.user.email}`)
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#board').show()
}
const onSignInFailure = () => {
  $('#message').text('Sign in failure')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = (response) => {
  $('#message').text('Thank you for signing out, play again soon!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}
const onSignOutFailure = () => {
  $('#message').text('Tic Tac Toe Sign out failure')
}
const onCreateGameSuccess = (response) => {
  $('#message').text('Click on the board where you want to place your X or O').css('padding-top', '30px')
  $('#board').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  store.game = response.game
  console.log(response)
  console.log(store.game)
}
const onUpdateGameSuccess = (response) => {
  console.log(response)
  $('#message').text('update game success')
  $('#board').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  response.game.cells.forEach(function (val, i) {
  })
  store.game = response.game
  console.log(store.game)
  $('#message').text('You won!')
  $('#update-game')
}
const onUpdateGameFailure = () => {
  $('#message').text('update game failed')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  onCreateGameSuccess,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
