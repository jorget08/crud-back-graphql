require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const conn = 'mongodb://localhost:27017/graphql'

module.exports = () => {
  const connect = () => {
    mongoose.connect(conn, 
      {keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true}, 
      (err) => {err ? console.log("DB error!") : console.log('Conectado')})
  }
  connect()
};