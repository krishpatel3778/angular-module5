(function() {
  angular.module('public')
  .controller('SignUpController', SignUpController);
  SignUpController.$inject=["MenuService","$scope","SignUpService"]
  function SignUpController(MenuService,$scope,SignUpService) {
    var reg = this;
    reg.user={};
    reg.alreadyRegistered=SignUpService.registered();
    reg.submit = function () {
      var success=SignUpService.addUser(reg.user);
      if(!success){
        reg.alreadyRegistered=true;
      }else{
        reg.completed=true;
        reg.readyToSubmit=false;
      }
    };
    $scope.$watch("reg.user.favorite_item",function(){
      if(reg.user.favorite_item!=undefined){
        MenuService.getSingleItem(reg.user.favorite_item).then(response=>{
          if(response=="error"){
            reg.itemError=true;
          }else{
            reg.itemError=false;
            reg.readyToSubmit=true;
          }
        });
      }
    });
  }
})();
