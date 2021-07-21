'use strict'
// const { data } = require('jquery')
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
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl +
      '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
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
const updateGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + 'store.game._id',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: {
      game: {
        cells: {
          index: store.gameIndex,
          value: store.currentPlayer
        }
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
