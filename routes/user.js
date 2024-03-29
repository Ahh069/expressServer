const express = require('express');
const router = express.Router();
const users = [
    {
      id: 1,
      name: "John",
      flavor: "Nacho",
    },
  
    {
      id: 2,
      name: "David",
      flavor: "Salt and Pepper",
    },
    {
      id: 3,
      name: "Lynn",
      flavor: "Barbeque",
    
    },
  ];
  
  module.exports = users;