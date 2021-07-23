'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields')
// const { data } = require('jquery')

const onSignUp = function (event) {
  event.preventDefault()
  // get info from event and form
  const form = event.target
  const data = getFormFields(form)
  // make an api call using AJAX
  // handle successful api call with .then
  // handle failed api call with .catch
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  // get info from event and form
  const form = event.target
  const data = getFormFields(form)
  // make an api call using AJAX
  // handle successful api call with .then
  // handle failed api call with .catch
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}
const onSignOut = function (event) {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const onCreateGame = function () {
  // handle successful api call with .then
  // handle failed api call with .catch
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}
// start player at x
let currentPlayer = 'x'
const onUpdateGame = (event) => {
  event.preventDefault()
  console.log('click')
  const boardClicked = $(event.target)
  if (boardClicked.text()) return
  boardClicked.text(currentPlayer)
  currentPlayer = currentPlayer === 'o' ? 'x' : 'o'
  // const move = $(event.target)
  console.log(event.game.Index)
  // console.log(currentPlayer.event.target)
  api.updateGame(currentPlayer)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onUpdateGame
}
