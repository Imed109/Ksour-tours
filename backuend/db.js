const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
class Database {
    constructor() {
      this.connect()   
    }
  connect() {
       mongoose.connect(MONGODB_URI)
         .then(() => {
           console.log('Database connection successfuly')
         })
         .catch(err => {
           console.error('Database connection error')
         }) 
    }
  }
  module.exports = new Database()