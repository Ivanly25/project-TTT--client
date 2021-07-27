'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields')
const store = require('./store')
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
  store.gameIndex = $(boardClicked).data('cell-index')
  console.log(store.game.over)
  store.currentPlayer = currentPlayer
  if (store.game.over) return
  console.log(currentPlayer + 'wins!')
  if (boardClicked.text()) return
  boardClicked.text(currentPlayer)
  currentPlayer = currentPlayer === 'o' ? 'x' : 'o'
  store.game.over = checkWin()
  api.updateGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}
const checkWin = () => {
  const cells = store.game.cells
  if (cells[0] === cells[1] && cells[0] === cells[2] && cells[0] !== '') {
    store.winner = currentPlayer
    return true
  }
  if (cells[3] === cells[4] && cells[3] === cells[5] && cells[3] !== '') {
    store.winner = currentPlayer
    return true
  }
  if (cells[6] === cells[7] && cells[6] === cells[8] && cells[6] !== '') {
    store.winner = currentPlayer
    return true
  }
  if (cells[0] === cells[3] && cells[0] === cells[6] && cells[0] !== '') {
    store.winner = currentPlayer
    return true
  }
  if (cells[1] === cells[4] && cells[1] === cells[7] && cells[1] !== '') {
    store.winner = currentPlayer
    return true
  }
  if (cells[2] === cells[5] && cells[2] === cells[8] && cells[2] !== '') {
    store.winner = currentPlayer
    return true
  }
  if (cells[0] === cells[4] && cells[0] === cells[8] && cells[0] !== '') {
    store.winner = currentPlayer
    return true
  }
  if (cells[2] === cells[4] && cells[2] === cells[6] && cells[2] !== '') {
    store.winner = currentPlayer
    return true
  }

  return false
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onCreateGame,
  onUpdateGame,
  checkWin
}
