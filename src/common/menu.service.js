(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    //ApiPath + '/categories.json'
    return $http.get('https://www.freepatentsonline.com/result.html?p=1&edit_alert=&srch=xprtsrch&query_txt=PEX%2Fsmith+AND+ABST%2FGlass%0D%0A&uspat=on&date_range=all&stemming=on&sort=relevance&search=Search').then(function (response) {
      console.log("here")
      console.log(response.data)
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.getSingleItem = function (short_name) {
    return $http.get(ApiPath + `/menu_items/${short_name}.json`)
    .then(response=>{
      return response.data;
    })
    .catch(error=>{
      return "error";
    })rights
  };

}



})();
