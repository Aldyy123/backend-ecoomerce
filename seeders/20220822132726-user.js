'use strict';
let bcryptjs = require("bcryptjs")
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = [
    {
      "username": "dono", 
      "email": "dono@mail.com", 
      "password": "pass123", 
      "role": "Staff", 
      "phoneNumber": "088111222333", 
      "address": "jl. Sesama"
    },{
      "username": "kasino", 
      "email": "kasino@mail.com", 
      "password": "pass123", 
      "role": "Admin", 
      "phoneNumber": "081234567890", 
      "address": "jl. Jalan"
    },{
      "username": "susi", 
      "email": "susi@mail.com", 
      "password": "pass123", 
      "role": "Staff", 
      "phoneNumber": "080808080808", 
      "address": "jl. Buntu"
    }
    ]
   let salt = bcryptjs.genSaltSync(10)

   data.forEach(el => {
    el.password = bcryptjs.hashSync(el.password, salt)
    el.createdAt = new Date(),
    el.updatedAt = new Date()
   })

   await queryInterface.bulkInsert('Users', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {})
  }
};
