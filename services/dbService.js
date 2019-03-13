
               /////// !!!!!!!!!!!!!!!!!! moze na oba nacina !!!!!!!!!!!!!!!!!!! ////////////////

// angular.module("dbServices",[])
//   .service("db", function ($http) {
//       this.getData = function () {
//           return $http({
//               url: 'https://raw.githubusercontent.com/Danilovesovic/bands/master/bands.json',
//               method: 'get' });
//       }
//   });


  angular.module("dbServices",[])
  .factory("db", function ($http) {
      return {
          
        getData : function () {
            return $http({
                url: 'https://raw.githubusercontent.com/Danilovesovic/bands/master/bands.json',
                method: 'get' });
        }

}
});