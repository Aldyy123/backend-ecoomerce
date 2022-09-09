# p2-cms-integration-server
CMS Integration - Server

npx sequelize --help

npx sequelize db:migrate:undo:all  #ngapus tabel
npx sequelize db:migrate  #bikin tabel

npx sequelize db:seed:undo:all
npx sequelize db:seed:all #masukin isi data tabel

#### How to configure
1. Nanti masnya bikin akun google developer di google console dan download file keys store yang berformat ```.json ``` di dapat dari google console saat create project. File dari keys store itu berisi configuration seperti client id, callback, dan lain sbgainya yg berkaitan dengan oauth
2. Untuk akses google auth nanti mas harus mengakses ke url ``` /auth/google ``` maka akan memilih akun auth google, kemudian akan mendapatkan akses token yang di inginkan

**Note: jika masnya ingin mengganti configurationnya ke env nanti file yang di keysnya bisa di pindah sesuai dengan variabel konfigurasinya**