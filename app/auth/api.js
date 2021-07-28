'use strict'
// const { data } = require('jquery')≠≠
const store = require('./store')
const config = require('./../config')
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}
// sign in
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
// sign out
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// create game
const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// eslint-disable-next-line no-undef
// update game
const updateGame = function (data) {
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: {
      game: {
        cell: {
          index: store.gameIndex,
          value: store.currentPlayer
        },
        over: store.game.over
      }
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  createGame,
  updateGame
}
