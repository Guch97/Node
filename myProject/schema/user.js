const joi = require('@hapi/joi')

const userName = joi.string().alphanum().min(1).max(10).required()

const password = joi.string().pattern(/^[\S]{6,12}$/).required()

exports.loginSchema = {
   body:{
      userName,
      password
   }
}