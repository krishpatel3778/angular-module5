(function() {
  angular.module('public')
  .controller('MyInfoController', MyInfoController);
  MyInfoController.$inject=["SignUpService","MenuService"];
  function MyInfoController(SignUpService,MenuService){
    var myInfo=this;
    myInfo.registered= SignUpService.registered();
    myInfo.info=SignUpService.getList()[0];
    if(myInfo.info!=undefined){
      MenuService.getSingleItem(myInfo.info.favorite_item).then(response=>{
        myInfo.item=response;
        console.log(myInfo.item)
      });
    }
  }
})()
