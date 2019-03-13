angular.module("bandApk")
   .controller("mainCtrl" , function (db) {
       ////// ovo se koristi da bi funkcije u okviru modula zvale varijable modula a ne global scopea
       let vm = this ;
       
       vm.band ;
       
       ////// pozivam custom servis modula(dbService) koji je sam pre toga ubacen u main apk.js(modul)
       ///// ovo then je neka vrsta promisa, ocekuje res i error i odmah se okida. 
       vm.bands = db.getData().then(function (res) {
            vm.bands = res.data;
            // console.log(vm.bands);
            
       });
       
      /////// na klik jedan objekat koji dobijam iz foreach u svakoj iteraciji ubacujem kao parametar ove funkcije i vracam gore u varijablu band. da bi kasnije nju mogao da koristim na index stranici 
       vm.showBand = function(band){
          vm.band = band ; 

       }
       
   });