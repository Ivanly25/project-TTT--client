'use strict'

const store = require('./store.js')
const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  console.log(response)
  $('#sign-up').trigger('reset')
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
  $('#message').text('Create game was successful!')
  $('#board').show()
  $('#sign-in').css('display', 'none')
  $('#sign-up').css('display', 'none')
  store.game = response.game
  console.log(store.game)
}
const onUpdateGameSuccess = () => {
  $('#message').text('update hame success')
  $('#board').show()
}
module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  onCreateGameSuccess
}
