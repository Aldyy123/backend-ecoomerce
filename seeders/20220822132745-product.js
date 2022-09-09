'use strict';

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
      "name": "DC Shoes Striker",
      "description": "Leather Shoes For Men Featuring Foam Padded Tongue And Collar, A Cupsole Construction.",
      "price": 999000,
      "stock": 100,
      "imgUrl": "https://media.dcshoes.co.id/media/catalog/product/cache/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/a/d/adys100624_dc_mens_striker_shoes_xksr_2_h.jpg",
      "CategoryId": 1,
      "AuthorId": 1
    },{
      "name": "Vans Sentry SK8-HI",
      "description": "This Sk8-Hi-inspired, lace-up silhouette also features heel pulls, modern Wafflecup construction, and drop-in UltraCush sockliners for maximum comfort.",
      "price": 1299000,
      "stock": 50,
      "imgUrl": "https://images.vans.com/is/image/Vans/VN0A5KY5DJR-ALT1?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
      "CategoryId": 2,
      "AuthorId": 3
    },{
      "name": "Converse Run Star Motion Ombr",
      "description": "The Run Star Motion takes classic Converse DNA and pairs it with an ultra-modern, innovative midsole to completely redefine platform style.",
      "price": 1599000,
      "stock": 30,
      "imgUrl": "https://images.vans.com/is/image/Vans/VN0A5KY5DJR-ALT1?wid=1600&hei=1600&fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
      "CategoryId": 2,
      "AuthorId": 1
    }
   ]

   data.forEach(el => {
    el.createdAt = new Date(),
    el.updatedAt = new Date()
   })

   await queryInterface.bulkInsert('Products', data, {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {})
  }
};
