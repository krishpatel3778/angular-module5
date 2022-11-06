(function() {
  angular.module('public')
  .service('SignUpService', SignUpService);
  function SignUpService(){
    var service=this;
    service.userList=[];
    service.getList=function(){
      return service.userList;
    }
    service.addUser= function (user){
      if(service.userList.length==0){
        service.userList.push(user);
        return true;
      }else{
        return false;
      }
    }
    service.registered= function(){
      if(service.userList.length==1){
        return true;
      }else{
        return false;
      }
    }
  }
})();
