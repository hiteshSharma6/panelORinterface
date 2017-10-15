app1.controller("uniController", function($scope,uniFactory){
	
	$scope.doDisable = false;
	
  $scope.addUniversity = function(){
	  $scope.doDisable = true;
	  var dto_obj = $scope.University;
       var promise = uniFactory.addUniversity(dto_obj);
       promise.then(function(data){
           console.log(data);
           $scope.errortext = "Record is Added Succesfully";
           $scope.doDisable = false;
           
       },function(er){
           console.log(er);
           $scope.errortext = "Record couldn't be Added. Please try Again."
           $scope.doDisable = false;
       })
   }; 
    
   $scope.resetFields = function(){
       
        for(x in $scope.University){
            $scope.University[x] = "";
            $scope.errortext = "";
        }
   };
    
        
       
});