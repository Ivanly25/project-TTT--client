'use strict'
const { data } = require('jquery')
const store = require('./store')
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
const createGame = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
const updateGame = function () {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/games/:id',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token,
      data
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
